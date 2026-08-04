import { useState, useCallback, useRef } from 'react';
import HeroBackground from './HeroBackground';
import GlitterField from './GlitterField';

interface RisingLantern {
  id: number;
  left: number;
}

/**
 * Hero
 * Seção 1 — Boas-vindas ao "reino". Fundo em estilo Rapunzel Enrolados com
 * casal em silhueta soltando lanternas. O botão "Entrar no Reino" dispara
 * uma pequena animação de lanternas subindo antes de rolar para a próxima seção.
 */
export default function Hero() {
  const [risingLanterns, setRisingLanterns] = useState<RisingLantern[]>([]);
  const idRef = useRef(0);

  const handleEnter = useCallback(() => {
    const newLanterns: RisingLantern[] = Array.from({ length: 6 }, () => {
      idRef.current += 1;
      return { id: idRef.current, left: 10 + Math.random() * 80 };
    });
    setRisingLanterns((prev) => [...prev, ...newLanterns]);

    window.setTimeout(() => {
      setRisingLanterns((prev) => prev.filter((l) => !newLanterns.some((n) => n.id === l.id)));
    }, 2700);

    const target = document.getElementById('arquivo-do-amor');
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <header className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-hero-gradient text-white">
      <HeroBackground />
      <GlitterField count={30} />

      {/* Lanternas ascendentes disparadas pelo clique no CTA */}
      <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
        {risingLanterns.map((lantern) => (
          <span
            key={lantern.id}
            className="lantern-rise absolute bottom-24"
            style={{ left: `${lantern.left}%` }}
          >
            <svg width="28" height="40" viewBox="0 0 28 40">
              <rect x="4" y="6" width="20" height="28" rx="7" fill="#ffd700" stroke="#b8860b" strokeWidth="1" />
              <rect x="2" y="2" width="24" height="6" rx="2.5" fill="#ffe9a8" stroke="#b8860b" strokeWidth="0.8" />
              <rect x="9" y="34" width="10" height="4" rx="1.5" fill="#e8b923" />
            </svg>
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-24 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100 backdrop-blur-sm sm:text-sm">
          👑 17 anos de uma Princesa
        </span>

        <h1 className="font-display text-5xl leading-tight text-amber-50 drop-shadow-[0_4px_18px_rgba(255,215,0,0.35)] sm:text-6xl md:text-7xl">
          Feliz Aniversário, Princesa
        </h1>

        <p className="max-w-xl text-base font-light text-blue-50/90 sm:text-lg">
          Guardei cada palavra sua desde o primeiro dia.
        </p>

        <button type="button" className="btn-royal mt-4" onClick={handleEnter}>
          <span aria-hidden="true">🏮</span>
          Entrar no Reino
        </button>
      </div>

      {/* Indicador de rolagem */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-amber-100/80" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </header>
  );
}
