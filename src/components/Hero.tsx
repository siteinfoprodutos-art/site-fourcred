import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Heart, MapPin } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-b from-white via-[#F3F6FA] to-[#F3F6FA] dark:from-[#07192E] dark:via-[#030F1E] dark:to-[#030F1E] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Top Credibility Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#073B78]/10 dark:bg-[#1769AA]/20 border border-[#073B78]/20 dark:border-[#1769AA]/40 text-[#073B78] dark:text-slate-200 text-[11px] sm:text-xs font-bold tracking-wide">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F58220] shrink-0" />
              <span>Correspondente Bancário Caixa Econômica Federal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#062B55] dark:text-white leading-[1.2] sm:leading-[1.15] font-display text-balance">
              Seu sonho da{' '}
              <span className="text-[#F58220] relative inline-block">
                casa própria
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 text-[#F58220]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20, 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{' '}
              começa com a escolha certa.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-[#344054] dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
              Transformamos seus objetivos em conquistas com soluções em crédito habitacional, seguros e serviços financeiros, oferecendo orientação especializada em cada etapa.
            </p>

            {/* Store Location Quick Pill on Mobile */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-[#07192E] border border-slate-200 dark:border-slate-800 shadow-sm text-xs text-slate-700 dark:text-slate-300 font-semibold">
              <MapPin className="w-4 h-4 text-[#F58220] shrink-0" />
              <span className="truncate">{COMPANY_CONFIG.address.full}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={COMPANY_CONFIG.getWhatsAppLink('Olá! Quero realizar meu sonho com a ajuda da Fourcred. Como podemos iniciar?')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-xl bg-[#F58220] hover:bg-[#FFA34D] text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-[#F58220]/25 active:scale-98"
              >
                <span>Quero realizar meu sonho</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>

              <a
                href="#servicos"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-white dark:bg-[#07192E] border border-slate-200 dark:border-slate-800 hover:border-[#073B78] dark:hover:border-[#F58220] text-[#073B78] dark:text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <span>Conheça nossas soluções</span>
              </a>
            </div>

            {/* Bullet Proof Highlights */}
            <div className="pt-4 sm:pt-6 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                <span>Atendimento Especializado</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#073B78] dark:text-[#1769AA] shrink-0" />
                <span>Segurança de Processos</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                <Heart className="w-4 h-4 text-[#F58220] shrink-0" />
                <span>Soluções Personalizadas</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image with Floating Badge */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Frame Accent */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#073B78] to-[#F58220] opacity-20 blur-xl"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 bg-white dark:bg-[#07192E]">
                <img
                  src={COMPANY_CONFIG.images.heroFamily}
                  alt="Família realizada em frente à sua casa própria"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Trust Card Overlay */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 dark:bg-[#07192E]/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 bg-[#073B78] text-white rounded-lg shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#F58220]" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-[#062B55] dark:text-white uppercase tracking-wide">
                      Aprovados pela Caixa
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-semibold">
                      Agilidade e acompanhamento até a entrega das chaves.
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
