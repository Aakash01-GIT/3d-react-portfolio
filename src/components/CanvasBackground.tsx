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

    // High-DPI support
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      // Draw once
      ctx.fillStyle = isDark ? '#020617' : '#ffffff'; // navy dark / pure white
      ctx.fillRect(0, 0, w, h);
    };

    resize();

    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [isDark]); // re-draws on theme change (very fast)

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
      aria-hidden="true"
    />
  );
}