import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, MessageSquare, KeyRound, Home as HomeIcon, Coins } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { useMagneticButton } from '../utils/motion';

interface HeroProps {
  parallaxY?: number;
}

export const Hero: React.FC<HeroProps> = ({ parallaxY = 0 }) => {
  const primaryMagneticRef = useMagneticButton(6);
  const secondaryMagneticRef = useMagneticButton(4);

  return (
    <section
      id="inicio"
      className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32 bg-gradient-to-b from-[#062B55] via-[#073B78] to-[#062B55] dark:from-[#030F1E] dark:via-[#07192E] dark:to-[#030F1E] text-white overflow-hidden transition-colors duration-300"
    >
      {/* Brilhos Radiais Suaves e Elementos Decorativos com leve Parallax */}
      <div
        className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#1769AA]/20 blur-3xl pointer-events-none"
        style={{ transform: `translate3d(0, ${parallaxY * 0.15}px, 0)`, willChange: 'transform' }}
      />
      <div
        className="absolute -bottom-10 right-10 w-96 h-96 rounded-full bg-[#F58220]/15 blur-3xl pointer-events-none"
        style={{ transform: `translate3d(0, ${parallaxY * -0.2}px, 0)`, willChange: 'transform' }}
      />

      {/* Ícones Decorativos em Linhas Finas (Parallax Suave) */}
      <div
        className="hidden md:flex absolute top-24 right-1/3 items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 text-[#F58220] pointer-events-none"
        style={{ transform: `translate3d(0, ${parallaxY * 0.25}px, 0)`, willChange: 'transform' }}
      >
        <KeyRound className="w-6 h-6 stroke-[1.5]" />
      </div>

      <div
        className="hidden md:flex absolute bottom-28 left-8 items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 text-white/40 pointer-events-none"
        style={{ transform: `translate3d(0, ${parallaxY * 0.18}px, 0)`, willChange: 'transform' }}
      >
        <HomeIcon className="w-6 h-6 stroke-[1.5]" />
      </div>

      <div
        className="hidden md:flex absolute top-1/2 right-12 items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 text-[#FFA34D]/50 pointer-events-none"
        style={{ transform: `translate3d(0, ${parallaxY * -0.15}px, 0)`, willChange: 'transform' }}
      >
        <Coins className="w-6 h-6 stroke-[1.5]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Coluna de Conteúdo */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Selo em destaque com Diamante Caixa */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-[#F58220]/40 text-white text-xs font-bold tracking-wide backdrop-blur-sm shadow-sm">
              <Award className="w-4 h-4 text-[#F58220] shrink-0" />
              <span>Correspondente Caixa • Classificação Diamante</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-[1.18] font-display text-balance">
              Seu sonho da{' '}
              <span className="text-[#F58220] relative inline-block">
                casa própria
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 text-[#F58220]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20, 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{' '}
              começa com a escolha certa.
            </h1>

            {/* Subtítulo curto */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-medium">
              Transformamos seus objetivos em conquistas com soluções em crédito habitacional Caixa, seguros, consórcios e benefícios em Franco da Rocha e região.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                ref={primaryMagneticRef as React.RefObject<HTMLAnchorElement>}
                href={COMPANY_CONFIG.getWhatsAppLink('Olá! Gostaria de fazer uma simulação de crédito habitacional no WhatsApp.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#F58220] hover:bg-[#FFA34D] text-white font-extrabold text-base transition-all shadow-xl shadow-[#F58220]/30 active:scale-98"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Simular no WhatsApp</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>

              <a
                ref={secondaryMagneticRef as React.RefObject<HTMLAnchorElement>}
                href="#servicos"
                className="w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base transition-all backdrop-blur-sm active:scale-98"
              >
                <span>Conhecer soluções</span>
              </a>
            </div>

            {/* Indicadores de Confiança Logo Abaixo */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                <span>Atendimento especializado</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFA34D] shrink-0" />
                <span>Franco da Rocha e região</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                <span>Análise sem compromisso</span>
              </div>
            </div>

          </div>

          {/* Coluna da Imagem */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#1769AA] to-[#F58220] opacity-30 blur-xl pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-[#062B55]">
                <img
                  src={COMPANY_CONFIG.images.heroFamily}
                  alt="Família feliz em frente à casa própria conquistada"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Card de Selo Flutuante */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#062B55]/90 dark:bg-[#030F1E]/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 bg-[#F58220] text-white rounded-lg shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wide text-white">
                      Correspondente Caixa Credenciado
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-medium">
                      Atendimento presencial em Franco da Rocha e suporte online integral.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
