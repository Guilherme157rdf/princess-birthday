import { useMemo } from 'react';

interface GlitterFieldProps {
  count?: number;
  colorClass?: string;
}

/**
 * GlitterField
 * Camada decorativa de partículas brilhantes (glitter) puramente em CSS/SVG.
 * Marcada como aria-hidden pois é apenas decorativa.
 */
export default function GlitterField({ count = 26 }: GlitterFieldProps) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 3.4,
        duration: 2.6 + Math.random() * 2.4,
      })),
    [count],
  );

  return (
    <div className="glitter-field" aria-hidden="true">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="glitter-dot"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
