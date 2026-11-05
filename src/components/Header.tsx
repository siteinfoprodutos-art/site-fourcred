import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'INÍCIO', href: '#inicio' },
    { label: 'SOBRE NÓS', href: '#sobre' },
    { label: 'SERVIÇOS', href: '#servicos' },
    { label: 'PORTFÓLIO', href: '#portfolio' },
    { label: 'CONTATO', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Logo Brand Zone */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#073B78] rounded-md"
          >
            <div className="flex items-center tracking-tight">
              <span className="text-xl sm:text-2xl font-extrabold text-[#073B78] font-display tracking-wider">
                FOUR
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#F58220] font-display tracking-wider">
                CRED
              </span>
            </div>
            <span className="hidden sm:inline-block text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-slate-400 pl-2 border-l border-slate-200">
              Serviços Financeiros
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold text-[#344054] hover:text-[#073B78] tracking-wider transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 border-transparent hover:border-[#F58220]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 shrink-0">
            
            <ThemeToggle />

            {/* Direct Mobile Call / WhatsApp Button */}
            <a
              href={COMPANY_CONFIG.getWhatsAppLink('Olá! Gostaria de falar com um especialista da Fourcred.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#F58220] hover:bg-[#FFA34D] text-white text-xs font-bold tracking-wide transition-all shadow-sm active:scale-95 whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Fale com um especialista</span>
              <span className="sm:hidden text-[11px]">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle (Touch target min 44x44px) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-slate-700 hover:text-[#073B78] focus:outline-none focus:ring-2 focus:ring-[#073B78] rounded-lg border border-slate-200"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            
            <div className="p-3 bg-[#F3F6FA] rounded-xl mb-3 flex items-center justify-between text-xs font-bold text-[#062B55]">
              <span>Atendimento WhatsApp:</span>
              <span className="text-[#F58220]">{COMPANY_CONFIG.phone}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block min-h-[44px] flex items-center px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100 hover:text-[#073B78] active:bg-slate-200"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={COMPANY_CONFIG.getWhatsAppLink('Olá! Gostaria de um atendimento especializado na Fourcred.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#F58220] text-white font-bold text-sm shadow-md active:scale-98"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Atendimento no WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_CONFIG.phoneFormatted}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#073B78] font-bold text-xs"
              >
                <Phone className="w-4 h-4 text-[#F58220]" />
                <span>Ligar para {COMPANY_CONFIG.phone}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
