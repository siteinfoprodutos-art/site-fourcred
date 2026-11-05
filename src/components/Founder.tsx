import React from 'react';
import { Briefcase, CheckCircle2, UserCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const Founder: React.FC = () => {
  const { founder } = COMPANY_CONFIG;

  return (
    <section className="py-20 bg-white dark:bg-[#030F1E] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#F3F6FA] dark:bg-[#07192E] rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 relative overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Leadership Monogram / Profile Side */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#073B78] to-[#062B55] text-white flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-xl">
                  <span className="text-4xl sm:text-5xl font-extrabold font-display tracking-widest text-[#F58220]">
                    DH
                  </span>
                </div>
                <div className="absolute bottom-0 right-0 p-2.5 rounded-full bg-[#F58220] text-white shadow-md border-2 border-white dark:border-slate-800">
                  <UserCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-[#062B55] dark:text-white font-display">
                {founder.name}
              </h3>
              <p className="text-xs font-bold text-[#F58220] uppercase tracking-wider mt-1">
                {founder.role}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-slate-200 text-xs font-bold">
                <Briefcase className="w-3.5 h-3.5 text-[#F58220]" />
                <span>{founder.experience}</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
                <span>Liderança Executiva</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062B55] dark:text-white font-display text-balance">
                Liderança com experiência e propósito.
              </h2>

              <blockquote className="text-base sm:text-lg text-[#344054] dark:text-slate-300 leading-relaxed italic border-l-4 border-[#F58220] pl-4 py-1">
                "{founder.bio}"
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                  <span>2 Decadas no Mercado Financeiro</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#073B78] dark:text-[#1769AA] shrink-0" />
                  <span>Compromisso com Excelência Operacional</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#073B78] dark:text-[#1769AA] shrink-0" />
                  <span>Relacionamento Estratégico com Bancos</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                  <span>Foco no Sucesso do Cliente</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
