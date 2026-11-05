import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Differentials } from './components/Differentials';
import { Founder } from './components/Founder';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ThemeProvider } from './context/ThemeContext';


export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F3F6FA] text-[#344054] dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-[#F58220] selection:text-white transition-colors duration-300">
      {/* 1. Header */}
      <Header />

      <main>
        {/* 2. Hero Principal */}
        <Hero />

        {/* 3. Faixa de Credibilidade */}
        <TrustBar />

        {/* 4. Sobre a Fourcred */}
        <About />

        {/* 5. Nossa História */}
        <Timeline />

        {/* 6. Soluções e Serviços */}
        <Services />

        {/* 7. Portfólio e Resultados */}
        <Portfolio />

        {/* 8. Diferenciais */}
        <Differentials />

        {/* 9. Apresentação do Fundador */}
        <Founder />

        {/* 10. Depoimentos */}
        <Testimonials />

        {/* 11. Localização */}
        <Location />

        {/* 12. CTA de Conversão */}
        <CTA />

        {/* 13. Contato */}
        <Contact />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Floating WhatsApp Action */}
      <WhatsAppButton />
    </div>
    </ThemeProvider>
  );
}
