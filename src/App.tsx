import React, { useEffect, useState, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { ProcessTimeline } from './components/ProcessTimeline';
import { MultiStepPreAnalysis } from './components/MultiStepPreAnalysis';
import { DocumentChecklist } from './components/DocumentChecklist';
import { Portfolio } from './components/Portfolio';
import { Differentials } from './components/Differentials';
import { Timeline } from './components/Timeline';
import { Founder } from './components/Founder';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Location } from './components/Location';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CurvedDivider } from './components/CurvedDivider';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [scrollSpeed, setScrollSpeed] = useState<number>(0);
  const [parallaxY, setParallaxY] = useState<number>(0);
  const [trustBarVisible, setTrustBarVisible] = useState<boolean>(false);

  const lastScrollYRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(performance.now());
  const rafIdRef = useRef<number | null>(null);

  // Único requestAnimationFrame para controle do scroll (apenas lê window.scrollY)
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        rafIdRef.current = requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const now = performance.now();
          const dt = Math.max(16, now - lastTimeRef.current);
          const dy = currentY - lastScrollYRef.current;

          // Velocidade do scroll calculada suavemente
          const speed = (dy / dt) * 10;
          setScrollSpeed(speed);
          setParallaxY(currentY);

          // Header: esconde ao descer (após 100px) e reaparece imediatamente ao subir
          if (currentY > 120) {
            if (dy > 4) {
              setIsHeaderVisible(false);
            } else if (dy < -4) {
              setIsHeaderVisible(true);
            }
          } else {
            setIsHeaderVisible(true);
          }

          lastScrollYRef.current = currentY;
          lastTimeRef.current = now;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Único IntersectionObserver para revelações de seções e detecção de link ativo
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section-reveal], section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          // Revelação suave única (opacity + translateY + scale)
          if (entry.isIntersecting) {
            if (target.hasAttribute('data-section-reveal')) {
              target.classList.add('is-revealed');
            }

            // Ativa contadores da TrustBar quando ela entra em tela
            if (target.id === 'trust-section') {
              setTrustBarVisible(true);
            }

            // Atualiza link ativo do cabeçalho
            if (target.id && target.id !== 'trust-section') {
              setActiveSection(target.id);
            }
          }
        });
      },
      {
        threshold: [0.15, 0.4],
        rootMargin: '0px 0px -10% 0px'
      }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F3F6FA] text-[#344054] dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-[#F58220] selection:text-white transition-colors duration-300">
        
        {/* Header com Auto-Hide ao rolar e link ativo */}
        <Header activeSection={activeSection} isHeaderVisible={isHeaderVisible} />

        <main>
          {/* 1. Hero Impactante */}
          <Hero parallaxY={parallaxY} />

          {/* Cortina entre a Hero e a Faixa de Confiança */}
          <div className="hero-curtain-top bg-[#062B55] dark:bg-[#030F1E] shadow-2xl overflow-hidden">
            
            {/* 2. Faixa de Confiança com Contadores Animados */}
            <div id="trust-section" data-section-reveal className="section-reveal">
              <TrustBar isVisible={trustBarVisible} />
            </div>

            {/* 8. Faixa de Letreiro (Marquee) interativa */}
            <Marquee scrollSpeed={scrollSpeed} />
          </div>

          {/* Divisória Curva para a seção Sobre */}
          <CurvedDivider fillColor="fill-white dark:fill-[#030F1E]" />

          {/* Sobre a Fourcred */}
          <div data-section-reveal className="section-reveal">
            <About />
          </div>

          <CurvedDivider fillColor="fill-[#F3F6FA] dark:fill-[#07192E]" />

          {/* 3. Serviços com Cards 3D Tilt e Botão Quero saber mais */}
          <div data-section-reveal className="section-reveal">
            <Services />
          </div>

          {/* 4. Como Funciona (Linha do tempo interativa com scroll) */}
          <div data-section-reveal className="section-reveal">
            <ProcessTimeline />
          </div>

          <CurvedDivider fillColor="fill-white dark:fill-[#030F1E]" />

          {/* Pré-Análise em Etapas (Formulário dinâmico) */}
          <div data-section-reveal className="section-reveal">
            <MultiStepPreAnalysis />
          </div>

          <CurvedDivider fillColor="fill-white dark:fill-[#030F1E]" />

          {/* 7. Checklist de Documentos (Comprador e Vendedor) */}
          <div data-section-reveal className="section-reveal">
            <DocumentChecklist />
          </div>

          {/* Segunda Faixa de Marquee */}
          <Marquee scrollSpeed={scrollSpeed} />

          {/* Portfólio e Resultados Históricos */}
          <div data-section-reveal className="section-reveal">
            <Portfolio />
          </div>

          {/* Diferenciais Fourcred */}
          <div data-section-reveal className="section-reveal">
            <Differentials />
          </div>

          {/* Linha do Tempo Institucional */}
          <div data-section-reveal className="section-reveal">
            <Timeline />
          </div>

          {/* Apresentação do Fundador */}
          <div data-section-reveal className="section-reveal">
            <Founder />
          </div>

          {/* 9. Depoimentos e FAQ */}
          <div data-section-reveal className="section-reveal">
            <Testimonials />
          </div>

          <div data-section-reveal className="section-reveal">
            <FAQ />
          </div>

          {/* 10. Localização (Sede e Loja) */}
          <div data-section-reveal className="section-reveal">
            <Location />
          </div>

          {/* CTA de Conversão */}
          <div data-section-reveal className="section-reveal">
            <CTA />
          </div>

          {/* Contato Oficial */}
          <div data-section-reveal className="section-reveal">
            <Contact />
          </div>
        </main>

        {/* Rodapé com Informações Legais do Correspondente */}
        <Footer />

        {/* WhatsApp Flutuante com Pulso Suave e Efeito Magnético */}
        <WhatsAppButton />

      </div>
    </ThemeProvider>
  );
}
