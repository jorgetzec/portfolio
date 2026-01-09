import React, { useEffect, useRef } from 'react';

export const DotGridHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spacing = 40;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Clear existing dots
    container.innerHTML = '';
    dotsRef.current = [];

    // Create dots grid
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        container.appendChild(dot);
        dotsRef.current.push(dot);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      dotsRef.current.forEach((dot) => {
        const dotX = parseFloat(dot.style.left) || 0;
        const dotY = parseFloat(dot.style.top) || 0;
        const dx = clientX - dotX;
        const dy = clientY - dotY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;
        const force = Math.max(0, (maxDist - dist) / maxDist);
        const angle = Math.atan2(dy, dx);
        const offset = force * 20;
        dot.style.transform = `translate(${Math.cos(angle) * offset}px, ${Math.sin(angle) * offset}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      container.innerHTML = '';
      dotsRef.current = [];
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      for (let x = 0; x < newWidth; x += spacing) {
        for (let y = 0; y < newHeight; y += spacing) {
          const dot = document.createElement('div');
          dot.className = 'dot';
          dot.style.left = `${x}px`;
          dot.style.top = `${y}px`;
          container.appendChild(dot);
          dotsRef.current.push(dot);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      id="dot-grid-container"
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
      style={{ background: 'transparent' }}
    />
  );
};

