import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style,
  width,
  height,
  loading = 'lazy',
  priority = false,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
};

export default OptimizedImage;
