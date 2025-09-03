import { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Google Analytics 4 helper functions
export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Custom hook for page views
export const usePageView = (url: string) => {
  useEffect(() => {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }, [url]);
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (location: string) => {
  trackEvent({
    action: 'click',
    category: 'WhatsApp',
    label: location,
  });
};

// Track scroll depth
export const useScrollTracking = () => {
  useEffect(() => {
    const scrollDepths = [25, 50, 75, 100];
    const trackedDepths: number[] = [];

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      scrollDepths.forEach(depth => {
        if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
          trackedDepths.push(depth);
          trackEvent({
            action: 'scroll',
            category: 'Engagement',
            label: `${depth}%`,
            value: depth,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
