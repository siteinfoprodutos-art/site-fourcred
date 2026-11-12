import React, { useEffect, useRef } from 'react';
import { COMPANY_CONFIG } from '../config/company';

interface MarqueeProps {
  scrollSpeed?: number;
  reverse?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const group = groupRef.current;
    if (!container || !track || !group) return;

    const urlParams = new URLSearchParams(window.location.search);
    const isDebug = urlParams.get('debug') === '1';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    // Configuração de velocidade (px/s)
    const baseSpeed = prefersReducedMotion ? 20 : (window.innerWidth < 768 ? 45 : 60);
    let SPEED = baseSpeed;
    let groupWidth = 0;
    let x = 0;
    let lastTime = performance.now();
    let boost = 1;
    let targetBoost = 1;
    let paused = false;
    let isVisible = true;
    let rafId: number | null = null;
    let lastScrollY = window.scrollY;
    let cloneCount = 0;

    // Função setup conforme especificação
    const setup = () => {
      // Remove clones antigos
      track.querySelectorAll('[data-clone]').forEach(n => n.remove());
      
      groupWidth = group.getBoundingClientRect().width;
      if (groupWidth === 0) {
        setTimeout(setup, 300);
        return;
      }

      cloneCount = 0;
      // Clona o grupo até a trilha ter pelo menos 2x a largura da tela + groupWidth
      while (track.getBoundingClientRect().width < window.innerWidth + groupWidth * 2) {
        const c = group.cloneNode(true) as HTMLElement;
        c.setAttribute('data-clone', '');
        c.setAttribute('aria-hidden', 'true');
        track.appendChild(c);
        cloneCount++;
      }

      if (isDebug) {
        console.log('[Marquee Debug]', {
          groupWidth,
          trackWidth: track.getBoundingClientRect().width,
          cloneCount,
          x,
          prefersReducedMotion,
        });
      }
    };

    // Inicialização pós fontes carregadas e window load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(setup);
    }
    window.addEventListener('load', setup);

    // Resize com debounce de 150ms
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(setup, 150);
    };
    window.addEventListener('resize', handleResize);

    // IntersectionObserver para pausar quando fora da tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
          paused = !isVisible;
        });
      },
      { threshold: 0 }
    );
    observer.observe(container);

    // Hover pause (somente dispositivos com hover)
    const handleMouseEnter = () => {
      if (!isTouch) paused = true;
    };
    const handleMouseLeave = () => {
      if (!isTouch && isVisible) paused = false;
    };
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Scroll boost (aumenta levemente enquanto rola a página, lendo apenas scrollY)
    let scrollTimeout: number;
    const handleScroll = () => {
      if (prefersReducedMotion) return;
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      if (delta > 2) {
        targetBoost = 1.8; // até 2x
        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
          targetBoost = 1;
        }, 120);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Loop requestAnimationFrame
    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      // Suavização do boost de scroll
      boost += (targetBoost - boost) * 0.1;

      if (!paused && groupWidth > 0) {
        x -= SPEED * boost * dt;
        if (-x >= groupWidth) {
          x += groupWidth;
        }
        track.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;

        if (isDebug && Math.random() < 0.02) {
          console.log('[Marquee Tick]', { x: x.toFixed(1), groupWidth, boost: boost.toFixed(2) });
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('load', setup);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="marquee"
      className="marquee relative py-3.5 sm:py-4 bg-[#073B78] dark:bg-[#062B55] text-white border-y border-white/10 select-none"
      style={{
        overflow: 'hidden',
        width: '100%',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
      }}
    >
      <div ref={trackRef} id="marqueeTrack" className="marquee__track">
        <div ref={groupRef} className="marquee__group">
          {COMPANY_CONFIG.marqueeItems.map((item, idx) => (
            <div key={idx} className="marquee__item flex items-center">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/95">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#F58220] shrink-0 shadow-sm ml-6 sm:ml-8" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
