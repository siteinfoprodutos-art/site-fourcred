import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progresso conforme a linha entra e transita pela viewport
      const total = rect.height + windowHeight * 0.4;
      const current = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, current / total));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = COMPANY_CONFIG.processSteps;

  return (
    <section id="como-funciona" className="py-20 bg-[#F3F6FA] dark:bg-[#07192E] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            <span>Passo a Passo Transparente</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] dark:text-white font-display text-balance">
            Como funciona o seu financiamento
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Uma linha do tempo clara, do primeiro contato à entrega das chaves da sua casa própria.
          </p>
        </div>

        {/* Linha do Tempo Dinâmica controlada por scroll */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          
          {/* Trilho base de fundo */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-1 bg-slate-200 dark:bg-slate-800 sm:-translate-x-1/2 rounded-full" />

          {/* Linha vertical que se preenche com o scroll (scaleY controlada pelo progresso) */}
          <div
            className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#073B78] via-[#1769AA] to-[#F58220] sm:-translate-x-1/2 rounded-full origin-top transition-transform duration-75 will-change-transform"
            style={{ transform: `scaleY(${scrollProgress})` }}
          />

          <div className="space-y-10 sm:space-y-14 relative z-10">
            {steps.map((item, idx) => {
              // Limiar para cada etapa acender
              const stepThreshold = (idx + 0.5) / steps.length;
              const isLit = scrollProgress >= stepThreshold;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pl-16 sm:pl-0 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card de Conteúdo */}
                  <div className="w-full sm:w-1/2">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 shadow-sm ${
                        isLit
                          ? 'bg-white dark:bg-[#030F1E] border-[#F58220]/60 dark:border-[#F58220] shadow-md ring-2 ring-[#F58220]/20'
                          : 'bg-white/80 dark:bg-[#030F1E]/60 border-slate-200 dark:border-slate-800 opacity-80'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-[#FFA34D]">
                          Etapa 0{item.step}
                        </span>
                        <span className="text-[11px] font-bold text-[#F58220]">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#062B55] dark:text-white mb-2 font-display">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Círculo da Etapa no Eixo Central (acende ao ser alcançado) */}
                  <div
                    className={`absolute sm:relative left-6 sm:left-auto -translate-x-1/2 sm:translate-x-0 w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm border-4 transition-all duration-300 shrink-0 ${
                      isLit
                        ? 'bg-[#F58220] text-white border-white dark:border-[#07192E] shadow-lg scale-110'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-white dark:border-[#07192E]'
                    }`}
                  >
                    {isLit ? <CheckCircle2 className="w-6 h-6" /> : `0${item.step}`}
                  </div>

                  {/* Espaçador para simetria desktop */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA direto do Como Funciona */}
        <div className="mt-14 text-center">
          <a
            href={COMPANY_CONFIG.getWhatsAppLink('Olá! Gostaria de iniciar meu processo de crédito habitacional pelo WhatsApp.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#073B78] hover:bg-[#062B55] dark:bg-[#F58220] dark:hover:bg-[#FFA34D] text-white font-extrabold text-sm shadow-md transition-all active:scale-98"
          >
            <MessageSquare className="w-4 h-4 text-[#F58220] dark:text-white" />
            <span>Quero iniciar minha etapa 1 agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
