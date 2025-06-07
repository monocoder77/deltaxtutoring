import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;

      containerRef.current.style.setProperty('--mouse-x', `${x}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y}%`);

      // Enhanced parallax effect for elements
      const parallaxElements = containerRef.current.querySelectorAll('.mouse-parallax-element');
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.1';
        const xOffset = (clientX - left - width / 2) * parseFloat(speed);
        const yOffset = (clientY - top - height / 2) * parseFloat(speed);
        const rotateX = (y - 50) * 0.1;
        const rotateY = (x - 50) * -0.1;
        
        (element as HTMLElement).style.transform = `
          translate(${xOffset}px, ${yOffset}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
      });
    };

    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      
      const parallaxElements = containerRef.current.querySelectorAll('.mouse-parallax-element');
      parallaxElements.forEach((element) => {
        (element as HTMLElement).style.transform = 'translate(0, 0) rotateX(0) rotateY(0)';
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="interactive-bg">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/20 to-purple-900/20 animate-gradient" />
      
      {/* Interactive radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15),transparent_50%)]" />
      
      {/* Floating elements with parallax */}
      <div className="mouse-parallax-element absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" data-speed="0.05" />
      <div className="mouse-parallax-element absolute top-3/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" data-speed="0.08" />
      
      {/* Additional decorative elements */}
      <div className="mouse-parallax-element absolute top-1/3 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl" data-speed="0.03" />
      <div className="mouse-parallax-element absolute bottom-1/3 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" data-speed="0.06" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10 animate-gradient" />
    </div>
  );
};

export default InteractiveBackground; 