import React from 'react';
import { ArrowRight, Check, Award } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50">
              <img
                src={COMPANY_CONFIG.images.aboutAdvisory}
                alt="Atendimento financeiro especializado Fourcred"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-[#073B78] text-white p-4 rounded-xl shadow-lg border border-white/20 max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-[#F58220]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">Atendimento Humanizado</span>
                </div>
                <p className="text-xs text-slate-100 font-medium">
                  Orientação transparente do primeiro contato até o fechamento.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#073B78]/10 text-[#073B78] text-xs font-bold uppercase tracking-wider">
              <span>Sobre a Fourcred</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B55] leading-tight font-display text-balance">
              Mais do que soluções financeiras. Somos parceiros das suas conquistas.
            </h2>

            <div className="space-y-4 text-base text-[#344054] leading-relaxed">
              <p>
                Como correspondente bancário da Caixa Econômica Federal, a Fourcred oferece soluções personalizadas em serviços bancários, buscando proporcionar condições competitivas e alternativas adequadas às necessidades de seus clientes.
              </p>
              <p>
                Além do crédito habitacional, ampliamos nossa atuação com soluções em seguros, consórcios e benefícios, contribuindo para o bem-estar financeiro e a tranquilidade das pessoas.
              </p>
            </div>

            {/* List Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#073B78]/10 text-[#073B78] mt-0.5">
                  <Check className="w-4 h-4 text-[#F58220]" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Originação de crédito habitacional</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#073B78]/10 text-[#073B78] mt-0.5">
                  <Check className="w-4 h-4 text-[#F58220]" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Corretagem de seguros integrados</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#073B78]/10 text-[#073B78] mt-0.5">
                  <Check className="w-4 h-4 text-[#F58220]" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Consórcios planejados sem juros</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#073B78]/10 text-[#073B78] mt-0.5">
                  <Check className="w-4 h-4 text-[#F58220]" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Benefícios de saúde e odontológicos</span>
              </div>
            </div>

            {/* Button Link */}
            <div className="pt-4">
              <a
                href="#historia"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#073B78] hover:bg-[#062B55] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <span>Conheça nossa história</span>
                <ArrowRight className="w-4 h-4 text-[#F58220]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
