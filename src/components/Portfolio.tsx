import React from 'react';
import { Award, Building2, Home, Shield } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-[#F3F6FA] dark:bg-[#07192E] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            <span>Resultados e Reconhecimento</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] dark:text-white font-display text-balance">
            Experiência que se transforma em conquistas.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Destaques e marcos históricos que comprovam nosso compromisso com a excelência operacional e a satisfação de nossos clientes.
          </p>
        </div>

        {/* Historical Indicators Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-white dark:bg-[#030F1E] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 w-12 h-12 rounded-xl bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-white mb-4 flex items-center justify-center">
                <Award className="w-6 h-6 text-[#F58220]" />
              </div>
              <p className="text-2xl font-extrabold text-[#062B55] dark:text-white font-display">DIAMANTE</p>
              <p className="text-xs font-bold text-[#F58220] uppercase tracking-wider mt-0.5">Caixa Econômica</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 border-t border-slate-100 dark:border-slate-800 pt-3">
              Classificação no 2º semestre de 2023.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#030F1E] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 w-12 h-12 rounded-xl bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-white mb-4 flex items-center justify-center">
                <Home className="w-6 h-6 text-[#073B78] dark:text-[#1769AA]" />
              </div>
              <p className="text-2xl font-extrabold text-[#062B55] dark:text-white font-display">+300</p>
              <p className="text-xs font-bold text-[#073B78] dark:text-[#1769AA] uppercase tracking-wider mt-0.5">Famílias Atendidas</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 border-t border-slate-100 dark:border-slate-800 pt-3">
              Sonho do imóvel próprio realizado no período histórico inicial.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#030F1E] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 w-12 h-12 rounded-xl bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-white mb-4 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#F58220]" />
              </div>
              <p className="text-2xl font-extrabold text-[#062B55] dark:text-white font-display">Empreendimentos</p>
              <p className="text-xs font-bold text-[#F58220] uppercase tracking-wider mt-0.5">Residenciais de Porte</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 border-t border-slate-100 dark:border-slate-800 pt-3">
              Atuação com destaque nos Residenciais Ibiza, Bruno de Sá e Play.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#030F1E] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 w-12 h-12 rounded-xl bg-[#073B78]/10 dark:bg-white/10 text-[#073B78] dark:text-white mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#073B78] dark:text-[#1769AA]" />
              </div>
              <p className="text-2xl font-extrabold text-[#062B55] dark:text-white font-display">Multi-Seguros</p>
              <p className="text-xs font-bold text-[#073B78] dark:text-[#1769AA] uppercase tracking-wider mt-0.5">Proteção Completa</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 border-t border-slate-100 dark:border-slate-800 pt-3">
              Consultoria técnica com as maiores seguradoras brasileiras.
            </p>
          </div>

        </div>

        {/* Real Estate Showcase */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white dark:bg-[#030F1E] p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6 items-center">
            <img
              src={COMPANY_CONFIG.images.housingKeys}
              alt="Crédito Habitacional e Entrega de Chaves"
              className="w-full md:w-48 h-44 rounded-xl object-cover shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F58220]/10 text-[#F58220] text-[11px] font-bold uppercase">
                <Award className="w-3.5 h-3.5" />
                Qualidade de Processos
              </span>
              <h4 className="text-lg font-bold text-[#062B55] dark:text-white">
                Selo de Excelência Operacional
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Aprovação ágil junto à Caixa Econômica Federal com equipe técnica apta a resolver pendências documentais com máxima transparência.
              </p>
            </div>
          </div>
        </div>

        {/* Historical Disclaimer Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
          * Informações e indicadores históricos extraídos das publicações e portfólio oficial da Fourcred.
        </div>

      </div>
    </section>
  );
};
