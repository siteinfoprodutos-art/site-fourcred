import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { ThemeToggle } from './ThemeToggle';
import { useMagneticButton } from '../utils/motion';

interface HeaderProps {
  activeSection?: string;
  isHeaderVisible?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ activeSection = 'inicio', isHeaderVisible = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const magneticCtaRef = useMagneticButton(4);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'INÍCIO', href: '#inicio', id: 'inicio' },
    { label: 'SERVIÇOS', href: '#servicos', id: 'servicos' },
    { label: 'COMO FUNCIONA', href: '#como-funciona', id: 'como-funciona' },
    { label: 'PRÉ-ANÁLISE', href: '#pre-analise', id: 'pre-analise' },
    { label: 'CHECKLIST', href: '#checklist', id: 'checklist' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'CONTATO', href: '#contato', id: 'contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
      } ${
        isScrolled
          ? 'bg-[#062B55]/95 backdrop-blur-md shadow-md py-2.5 border-b border-white/10'
          : 'bg-[#073B78] py-3.5 border-b border-white/10'
      }`}
      style={{ willChange: 'transform' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Logo Brand Zone */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#F58220] rounded-md shrink-0"
          >
            <div className="relative h-[36px] w-28 sm:h-[42px] sm:w-36 shrink-0 overflow-hidden">
              <img
                src={COMPANY_CONFIG.images.logo}
                alt="Fourcred"
                className="absolute left-[-8px] top-[-52px] w-[138px] max-w-none sm:left-[-10px] sm:top-[-62px] sm:w-[168px]"
              />
            </div>
            <span className="hidden xl:inline-block text-[10px] font-semibold uppercase tracking-widest text-white/70 pl-2 border-l border-white/30">
              Correspondente Caixa
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] xl:text-xs font-bold tracking-wider transition-colors whitespace-nowrap shrink-0 py-1.5 border-b-2 ${
                    isActive
                      ? 'text-white border-[#F58220]'
                      : 'text-white/80 hover:text-white border-transparent hover:border-[#F58220]/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />

            {/* Direct WhatsApp Action with Magnetic and Shimmer */}
            <a
              ref={magneticCtaRef as React.RefObject<HTMLAnchorElement>}
              href={COMPANY_CONFIG.getWhatsAppLink('Olá! Gostaria de falar com um especialista da Fourcred.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              className="btn-shimmer inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-[#F58220] hover:bg-[#FFA34D] text-white text-xs font-bold tracking-wide transition-all shadow-sm active:scale-95 whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Simular no WhatsApp</span>
              <span className="sm:hidden text-[11px]">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle (min 44x44px) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-white hover:text-[#F58220] focus:outline-none focus:ring-2 focus:ring-[#F58220] rounded-lg border border-white/20 hover:bg-white/10"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#062B55] border-b border-white/10 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <div className="p-3 bg-white/10 rounded-xl mb-3 flex items-center justify-between text-xs font-bold text-white">
              <span>Atendimento WhatsApp:</span>
              <span className="text-[#F58220]">{COMPANY_CONFIG.phone}</span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block min-h-[44px] flex items-center px-4 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-white/15 text-white font-extrabold border-l-4 border-[#F58220]'
                      : 'text-white/85 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href={COMPANY_CONFIG.getWhatsAppLink('Olá! Gostaria de um atendimento especializado na Fourcred.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#F58220] text-white font-bold text-sm shadow-md active:scale-98"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Simular no WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_CONFIG.phoneFormatted}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
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
