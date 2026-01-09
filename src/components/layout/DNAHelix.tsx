import React, { useRef, useEffect } from 'react';
import './DNAHelix.css';

export const DNAHelix: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createBars = () => {
      // Calculate number of bars based on viewport width
      // Extend beyond viewport edges to create overflow effect
      const viewportWidth = window.innerWidth;
      const barWidth = 20;
      const extraBars = 20; // Extra bars on each side to extend beyond edges
      const extendedWidth = viewportWidth + (extraBars * barWidth * 2);
      const numberOfBars = Math.ceil(extendedWidth / barWidth);
      
      // Calculate start position to center the helix, extending beyond edges
      const totalWidth = numberOfBars * barWidth;
      const startOffset = -totalWidth / 2 + barWidth / 2;
      const rotateDelay = 0.15; // Delay between each bar
      
      // Clear any existing bars
      container.innerHTML = '';
      
      for (let i = 0; i < numberOfBars; i++) {
        const bar = document.createElement('div');
        const topDotWrapper = document.createElement('span');
        const topDot = document.createElement('span');
        const bottomDotWrapper = document.createElement('span');
        const bottomDot = document.createElement('span');
        
        topDotWrapper.className = 'dna-dot-wrapper dna-dot-top';
        topDot.className = 'dna-dot-inner';
        bottomDotWrapper.className = 'dna-dot-wrapper dna-dot-bottom';
        bottomDot.className = 'dna-dot-inner';
        
        const leftOffset = startOffset + (i * barWidth);
        const delay = (i * rotateDelay - 60); // Calculate delay based on position
        
        bar.style.left = `calc(50% + ${leftOffset}px)`;
        bar.style.setProperty('--animation-delay', `${delay}s`);
        topDot.style.setProperty('--animation-delay', `${delay}s`);
        bottomDot.style.setProperty('--animation-delay', `${delay}s`);
        
        // Set initial transform for centering
        topDotWrapper.style.transform = 'translateX(-50%)';
        bottomDotWrapper.style.transform = 'translateX(-50%)';
        
        topDotWrapper.appendChild(topDot);
        bottomDotWrapper.appendChild(bottomDot);
        bar.appendChild(topDotWrapper);
        bar.appendChild(bottomDotWrapper);
        container.appendChild(bar);
      }
    };

    createBars();

    // Handle resize
    const handleResize = () => {
      createBars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      id="dna"
      ref={containerRef}
      className="fixed inset-0 overflow-visible -z-10"
      style={{ 
        width: '100%', 
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    />
  );
};

