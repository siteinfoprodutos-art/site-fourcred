import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={COMPANY_CONFIG.getWhatsAppLink('Olá! Gostaria de falar com um atendente da Fourcred.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 min-h-[48px] flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group border-2 border-white"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageSquare className="w-5 h-5 fill-current shrink-0" />
      <span className="font-display tracking-wide whitespace-nowrap">Fale no WhatsApp</span>
    </a>
  );
};
