"use client"

import React, { useRef, useEffect } from 'react';

// Particle class handles individual particle behavior and rendering
class Particle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.baseX = x;
    this.baseY = y;
    // Particle density affects how far the particle will be pushed
    this.density = Math.random() * 30 + 1;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(pointerPos, forceRadius) {
    const dx = pointerPos.x - this.x;
    const dy = pointerPos.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < forceRadius) {
      const angle = Math.atan2(dy, dx);
      const force = (forceRadius - distance) / forceRadius;
      const moveX = force * this.density * Math.cos(angle);
      const moveY = force * this.density * Math.sin(angle);
      this.x -= moveX;
      this.y -= moveY;
    } else {
      // Ease back to original position
      if (this.x !== this.baseX) {
        const dxBase = this.x - this.baseX;
        this.x -= dxBase / 10;
      }
      if (this.y !== this.baseY) {
        const dyBase = this.y - this.baseY;
        this.y -= dyBase / 10;
      }
    }
  }
}

const ParticleCanvas = ({
  particleCount = 300,  // Default particle count
  forceRadius = 150     // Default force radius
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameIdRef = useRef(null);
  const pointerPositionRef = useRef({ x: -100, y: -100 });

  const setCanvasDimensions = () => {
    if (containerRef.current && canvasRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      canvasRef.current.width = clientWidth;
      canvasRef.current.height = clientHeight;
    }
  };

  const initParticles = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 1.5 + 0.5;
      const color = 'rgba(255, 255, 255, 0.8)';
      particles.push(new Particle(x, y, 1, color));
    }
    particlesRef.current = particles;
  };

  const animate = (ctx) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach(p => {
      p.update(pointerPositionRef.current, forceRadius);
      p.draw(ctx);
    });

    animationFrameIdRef.current = requestAnimationFrame(() => animate(ctx));
  };

  useEffect(() => {
    setCanvasDimensions();
    initParticles();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleMouseMove = e => {
      pointerPositionRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleTouchMove = e => {
      if (e.touches.length > 0) {
        pointerPositionRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };
    const handleTouchEnd = () => {
      pointerPositionRef.current = { x: -100, y: -100 };
    };
    const handleResize = () => {
      setCanvasDimensions();
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('resize', handleResize);

    animate(ctx);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [particleCount, forceRadius]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="block bg-transparent" />
    </div>
  );
};

export default ParticleCanvas;
