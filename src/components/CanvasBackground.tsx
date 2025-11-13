import { useEffect, useRef } from 'react';

interface CanvasBackgroundProps {
  isDark: boolean;
}

export default function CanvasBackground({ isDark }: CanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
    }> = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: Math.random() * 2 + 1,
      });
    }

    let animationId: number;

    const animate = () => {
      const bgOpacity = isDark ? 0.05 : 0.02;
      ctx.fillStyle = isDark ? `rgba(2, 6, 23, ${bgOpacity})` : `rgba(255, 255, 255, ${bgOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.z -= particle.vz;
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        const scale = 1000 / (1000 + particle.z);
        const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = scale * 2;

        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);

        if (isDark) {
          ctx.fillStyle = `rgba(34, 211, 238, ${1 - particle.z / 1000})`;
        } else {
          ctx.fillStyle = `rgba(59, 130, 246, ${(1 - particle.z / 1000) * 0.6})`;
        }
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
