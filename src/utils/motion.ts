import React, { useEffect, useRef, useState } from 'react';

/**
 * Hook de Efeito Magnético Leve (máx 6px) para botões principais.
 * Respeita preferências do usuário e desliga em telas de toque (touch).
 */
export function useMagneticButton(maxOffset: number = 6) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Desliga em dispositivos touch ou com preferência de movimento reduzido
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    let rafId: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;

    const animate = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

      if (isHovered || Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafId = requestAnimationFrame(animate);
      } else {
        el.style.transform = 'translate3d(0, 0, 0)';
        rafId = null;
      }
    };

    const onMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const relX = mouseEvent.clientX - rect.left - rect.width / 2;
      const relY = mouseEvent.clientY - rect.top - rect.height / 2;
      targetX = Math.max(-maxOffset, Math.min(maxOffset, relX * 0.25));
      targetY = Math.max(-maxOffset, Math.min(maxOffset, relY * 0.25));
      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    const onMouseEnter = () => {
      isHovered = true;
    };

    const onMouseLeave = () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
      el.style.transform = '';
    };
  }, [maxOffset]);

  return ref;
}

/**
 * Card com Efeito 3D Tilt suave (máximo 6 graus) e foco de brilho.
 * Desliga automaticamente em telas de toque e motion reduzido.
 */
export function useTiltCard(maxTiltDeg: number = 6) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    let rafId: number | null = null;
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let isHovering = false;

    const loop = () => {
      currentRotateX += (targetRotateX - currentRotateX) * 0.15;
      currentRotateY += (targetRotateY - currentRotateY) * 0.15;
      el.style.transform = `perspective(800px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) translateY(${isHovering ? '-4px' : '0px'})`;

      if (isHovering || Math.abs(targetRotateX - currentRotateX) > 0.05 || Math.abs(targetRotateY - currentRotateY) > 0.05) {
        rafId = requestAnimationFrame(loop);
      } else {
        el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        rafId = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = x / rect.width;
      const py = y / rect.height;

      targetRotateX = (0.5 - py) * (maxTiltDeg * 2);
      targetRotateY = (px - 0.5) * (maxTiltDeg * 2);

      setGlarePos({
        x: Math.round(px * 100),
        y: Math.round(py * 100),
        opacity: 0.15
      });

      if (!rafId) rafId = requestAnimationFrame(loop);
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetRotateX = 0;
      targetRotateY = 0;
      setGlarePos(prev => ({ ...prev, opacity: 0 }));
      if (!rafId) rafId = requestAnimationFrame(loop);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
      el.style.transform = '';
    };
  }, [maxTiltDeg]);

  return { cardRef, glarePos };
}
