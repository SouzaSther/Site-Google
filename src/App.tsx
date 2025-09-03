import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  AlertTriangle,
  Target,
  Smartphone,
  Search,
  TrendingUp,
  Clock,
  Users,
  Star,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logo from "../logo.png";
import { trackWhatsAppClick, useScrollTracking } from "./utils/analytics";

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  // Track scroll depth for engagement
  useScrollTracking();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = (location: string) => {
    trackWhatsAppClick(location);
    window.open(
      "https://wa.me/5513991752901?text=Olá,%20gostaria%20de%20falar%20com%20vocês",
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Seu negócio está{" "}
              <span className="text-orange-500">invisível</span> na internet
              <br />e a <span className="text-red-500">culpa é sua</span>. Mude
              isso agora.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Criamos sites e landing pages de alta performance que transformam
              visitantes em clientes fiéis. Chega de site que não gera
              resultado. Com a{" "}
              <span className="text-orange-500 font-bold">Centralizou</span>,
              seu site novo em gera os resultados que você merece.
            </p>
          </div>

          <button
            onClick={() => handleWhatsAppClick("hero")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Solicitar orçamento via WhatsApp"
          >
            QUERO UM SITE QUE VENDE AGORA
          </button>
        </div>
      </header>

      {/* Pain Points Section */}
      <section
        className="py-20 px-4 bg-gray-50"
        aria-labelledby="pain-points-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              id="pain-points-heading"
              className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
            >
              Isso soa <span className="text-red-500">familiar</span> para você?
            </h2>
            <p className="text-xl text-gray-600">
              Sua empresa se encaixa em algum desses cenários?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
                title: "Site antigo e não responsivo",
                description:
                  "Você não tem um site ou o seu site é antigo e não funciona em celulares?",
              },
              {
                icon: <Target className="w-8 h-8 text-red-500" />,
                title: "Perdido na internet",
                description:
                  "Você se sente perdido e não sabe como atrair clientes pela internet?",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-red-500" />,
                title: "Concorrência à frente",
                description:
                  "Seus concorrentes estão online e você está ficando para trás?",
              },
              {
                icon: <Target className="w-8 h-8 text-red-500" />,
                title: "Anúncios sem retorno",
                description:
                  "Você investe em anúncios, mas não vê retorno em vendas?",
              },
              {
                icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
                title: "Vergonha do site atual",
                description:
                  "Você tem vergonha de mostrar o site da sua empresa para os clientes?",
              },
              {
                icon: <Clock className="w-8 h-8 text-red-500" />,
                title: "Tempo perdido",
                description:
                  "Você perde oportunidades de negócio todos os dias por não ter presença online?",
              },
            ].map((pain, index) => (
              <article
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4" aria-hidden="true">
                  {pain.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pain.title}
                </h3>
                <p className="text-gray-600">{pain.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        className="py-20 px-4 bg-white"
        aria-labelledby="solutions-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              id="solutions-heading"
              className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
            >
              A <span className="text-orange-500">Centralizou</span> é a chave
              para você
              <br />
              <span className="text-green-600">destravar</span> suas vendas
              online
            </h2>
            <p className="text-xl text-gray-600">
              Como a Centralizou vai transformar a sua presença digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-orange-500" />,
                title: "Design Profissional e Atraente",
                description:
                  "Para você parar de parecer amador e transmitir a confiança que seu negócio merece.",
              },
              {
                icon: <Search className="w-12 h-12 text-orange-500" />,
                title: "Otimização para o Google (SEO)",
                description:
                  "Para que seus clientes te encontrem antes dos seus concorrentes.",
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
                title: "Foco em Conversão",
                description:
                  "Cada elemento do seu site pensado para transformar visitantes em leads e vendas.",
              },
              {
                icon: <Smartphone className="w-12 h-12 text-orange-500" />,
                title: "100% Responsivo",
                description:
                  "Seu site perfeito em qualquer tela: celular, tablet ou computador.",
              },
              {
                icon: <Clock className="w-12 h-12 text-orange-500" />,
                title: "Velocidade na Entrega",
                description:
                  "Seu novo site no ar em tempo recorde para você começar a vender o mais rápido possível.",
              },
              {
                icon: <Users className="w-12 h-12 text-orange-500" />,
                title: "Suporte Especializado",
                description:
                  "Nossa equipe te acompanha desde o briefing até o lançamento e além.",
              },
            ].map((solution, index) => (
              <article
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="mb-6" aria-hidden="true">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section
        className="py-20 px-4 bg-gray-900 text-white"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              id="testimonials-heading"
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Resultados <span className="text-orange-500">Reais</span> de quem
              <br />
              confiou na Centralizou
            </h2>
            <p className="text-xl text-gray-300">
              O que nossos clientes estão dizendo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                company: "Silva Advocacia",
                testimony:
                  "Em 30 dias após o lançamento do site, triplicamos nossos leads qualificados. A Centralizou entregou exatamente o que prometeu.",
                rating: 5,
                result: "+300% leads qualificados",
              },
              {
                name: "Marina Santos",
                company: "Clínica Estética Beauty",
                testimony:
                  "Nosso faturamento online aumentou 250% no primeiro trimestre. O site é lindo e converte muito bem!",
                rating: 5,
                result: "+30% faturamento online",
              },
              {
                name: "João Oliveira",
                company: "Construtech Engenharia",
                testimony:
                  "Finalmente temos um site à altura da nossa empresa. Os clientes agora nos procuram pelo Google constantemente.",
                rating: 5,
                result: "2° página no Google",
              },
            ].map((testimonial, index) => (
              <article
                key={index}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700"
              >
                <div
                  className="flex mb-4"
                  aria-label={`Avaliação: ${testimonial.rating} estrelas`}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.testimony}"
                </blockquote>
                <div className="border-t border-gray-700 pt-4">
                  <cite className="font-bold text-white not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-gray-400">{testimonial.company}</p>
                  <p className="text-green-400 font-bold mt-2">
                    {testimonial.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Intermediate CTA */}
      <section id="cta-section" className="py-20 px-4 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Pare de perder clientes para a concorrência
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Agende uma consultoria gratuita e sem compromisso
          </p>
          <button
            onClick={() => handleWhatsAppClick("intermediate-cta")}
            className="bg-white text-orange-500 text-xl font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Falar com especialista via WhatsApp"
          >
            FALAR COM UM ESPECIALISTA AGORA
          </button>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Este serviço é para <span className="text-orange-500">você</span>{" "}
              que...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "É empresário, profissional liberal ou autônomo e quer mais clientes",
              "Está cansado de perder vendas para a concorrência",
              "Quer ter uma presença online profissional e de autoridade",
              "Entende que um site é um investimento, e não um custo",
              "Busca resultados e não apenas um 'site bonitinho'",
              "Quer dominar seu mercado e ser referência no seu segmento",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency/Offer Section */}
      <section className="py-20 px-4 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Oferta Especial por{" "}
              <span className="text-yellow-300">Tempo Limitado</span>
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Os 10 primeiros que fecharem o projeto este mês ganharão:
              <br />
              <span className="text-2xl font-bold text-yellow-300">
                1 ANO DE DOMÍNIO GRÁTIS + DESCONTO NA HOSPEDAGEM
              </span>
            </p>
          </div>

          <div className="bg-black bg-opacity-50 rounded-2xl p-8 mb-8">
            <p className="text-xl mb-4">
              ⏰ Tempo restante para garantir sua vaga:
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="text-sm">DIAS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-sm">HORAS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-sm">MIN</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-sm">SEG</div>
              </div>
            </div>
          </div>

          <div className="text-2xl font-bold mb-8">
            🔥 Restam apenas <span className="text-yellow-300">3 vagas</span>!
            🔥
          </div>

          <button
            onClick={() => handleWhatsAppClick("urgency-offer")}
            className="bg-yellow-400 text-black text-xl font-bold py-4 px-8 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Garantir vaga via WhatsApp"
          >
            GARANTIR MINHA VAGA AGORA
          </button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Chega de <span className="text-red-500">procrastinar</span>.<br />
            Dê o próximo passo para{" "}
            <span className="text-orange-500">centralizar</span>
            <br />
            seus resultados e <span className="text-green-500">dominar</span> o
            seu mercado.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A decisão é sua. Continue invisível ou tome a atitude que vai mudar
            tudo.
          </p>
          <button
            onClick={() => handleWhatsAppClick("final-cta")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-2xl font-bold py-6 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto"
            aria-label="Centralizar vendas via WhatsApp"
          >
            QUERO CENTRALIZAR MINHAS VENDAS AGORA
            <ChevronRight className="w-8 h-8 ml-2" />
          </button>

          <div className="mt-8 text-gray-400">
            <p>⚡ Resposta em até 1 hora nos dias úteis</p>
            <p>✅ Dúvidas iniciais 100% gratuitas</p>
            <p>🎯 Metodologia comprovada</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-12 pb-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <img
            src={logo}
            style={{ width: "17rem" }}
            alt="Centralizou - Criação de Sites Profissionais"
            className="h-auto mb-4 drop-shadow-lg"
            loading="lazy"
            width="272"
            height="auto"
          />
          <p className="text-lg font-semibold text-gray-50 mb-6 text-center">
            Centralizando resultados, maximizando vendas.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full mb-6">
            <div
              onClick={() => handleWhatsAppClick("footer")}
              className="flex items-center gap-2 md:gap-3 mb-4 md:mb-0 cursor-pointer hover:text-orange-400 transition-colors"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleWhatsAppClick("footer");
                }
              }}
              aria-label="Entrar em contato via telefone"
            >
              <Phone className="w-6 h-6 text-orange-400" aria-hidden="true" />
              <span className="text-gray-300 text-base">(13) 99175-2901</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-0">
              <Mail className="w-6 h-6 text-orange-400" aria-hidden="true" />
              <span className="text-gray-300 text-base">
                contato@centralizou.com
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <MapPin className="w-6 h-6 text-orange-400" aria-hidden="true" />
              <span className="text-gray-300 text-base">São Paulo, SP</span>
            </div>
          </div>
          <div className="w-full border-t border-gray-800 pt-4 text-center mb-5">
            <p className="text-xs text-gray-500">
              © 2025 Centralizou. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
