import React, { useRef, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particleCount = 50;
    const particleColor = 'rgba(22, 78, 49, 0.1)';
    const particleRadius = 2;
    const maxSpeed = 0.5;
    const connectionDistance = 150;
    const connectionOpacity = 0.1;

    const particles: {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * maxSpeed,
        dy: (Math.random() - 0.5) * maxSpeed,
        radius: Math.random() * particleRadius + 1,
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
          particle.dx = -particle.dx;
        }
        if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
          particle.dy = -particle.dy;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const nextParticle = particles[j];
          const distance = Math.sqrt(
            Math.pow(particle.x - nextParticle.x, 2) +
            Math.pow(particle.y - nextParticle.y, 2)
          );

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(22, 78, 49, ${connectionOpacity * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(nextParticle.x, nextParticle.y);
            ctx.stroke();
          }
        }
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-50"
    />
  );
};

export default ParticleBackground;