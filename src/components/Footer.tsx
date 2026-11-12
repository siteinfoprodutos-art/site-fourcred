import React from 'react';
import { Phone, Mail, MapPin, Instagram, ShieldCheck, Building, Store, FileText } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const Footer: React.FC = () => {
  const { phone, email, locations, instagram, instagramHandle, legalInfo } = COMPANY_CONFIG;

  return (
    <footer className="bg-[#062B55] text-white pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center tracking-tight">
              <span className="text-2xl font-extrabold text-white font-display tracking-wider">
                FOUR
              </span>
              <span className="text-2xl font-extrabold text-[#F58220] font-display tracking-wider">
                CRED
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Correspondente bancário da Caixa Econômica Federal em Franco da Rocha e região. Especialistas em crédito habitacional, seguros, consórcios e soluções financeiras integradas.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#F58220]" />
              <span>Correspondente Caixa Credenciado • Classificação Diamante</span>
            </div>

            {/* Informações legais do correspondente */}
            <div className="p-3 rounded-xl bg-black/20 border border-white/10 text-[11px] text-slate-300 space-y-1">
              <p className="font-bold text-[#FFA34D]">Dados de Registro:</p>
              <p>CNPJ: {legalInfo.cnpj}</p>
              <p>Código Correspondente Caixa: {legalInfo.correspondenteCaixaCode}</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#inicio" className="hover:text-white transition-colors py-1 inline-block">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors py-1 inline-block">Serviços</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors py-1 inline-block">Como Funciona</a></li>
              <li><a href="#pre-analise" className="hover:text-white transition-colors py-1 inline-block">Pré-Análise</a></li>
              <li><a href="#checklist" className="hover:text-white transition-colors py-1 inline-block">Checklist</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors py-1 inline-block">FAQ</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors py-1 inline-block">Localização</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors py-1 inline-block">Contato</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
              Nossas Soluções
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#servicos" className="hover:text-white transition-colors py-1 inline-block">Crédito Habitacional Caixa</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors py-1 inline-block">Seguros Residencial & Vida</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors py-1 inline-block">Consórcio Imobiliário & Auto</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors py-1 inline-block">Planos de Saúde & Odonto</a></li>
            </ul>

            <div className="pt-2 text-xs text-slate-400">
              <p className="font-bold text-slate-300">Aviso Regulatório:</p>
              <p className="mt-1 leading-snug text-[11px] text-amber-200/90 font-medium">
                * Sujeito a análise cadastral e aprovação de crédito pelas instituições financeiras parceiras.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Units */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
              Unidades & Contato
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F58220] shrink-0" />
                <span className="font-bold">{phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F58220] shrink-0" />
                <span>{email}</span>
              </p>
              
              <div className="pt-2 border-t border-slate-800 space-y-1.5">
                <p className="flex items-start gap-1.5 text-slate-300">
                  <Building className="w-3.5 h-3.5 text-[#F58220] shrink-0 mt-0.5" />
                  <span><strong>Sede Central:</strong> {locations[0].street}, {locations[0].complement} - {locations[0].city} / {locations[0].state}</span>
                </p>
                <p className="flex items-start gap-1.5 text-slate-300">
                  <Store className="w-3.5 h-3.5 text-[#F58220] shrink-0 mt-0.5" />
                  <span><strong>{locations[1].title}:</strong> {locations[1].street}, {locations[1].complement} - {locations[1].city} / {locations[1].state}</span>
                </p>
              </div>

              <p className="flex items-center gap-2 pt-2">
                <Instagram className="w-4 h-4 text-[#F58220] shrink-0" />
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-bold"
                >
                  {instagramHandle}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-4 text-[11px] text-slate-400 border-b border-slate-800 leading-relaxed">
          {legalInfo.legalDisclaimer}
        </div>

        {/* Bottom Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Fourcred Serviços Financeiros. Todos os direitos reservados.</p>
          <div className="flex items-center justify-center gap-3 text-[11px]">
            <span>Franco da Rocha - SP</span>
            <span>·</span>
            <span>Correspondente Bancário Caixa</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
