import type { ReactNode, ElementType } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  threshold?: number;
}

/**
 * Reveal
 * Envolve qualquer conteúdo com uma animação de fade-in + slide-up
 * disparada quando o elemento entra na viewport.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, threshold }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>(threshold);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
