import Reveal from './Reveal';
import BarbieBackground from './BarbieBackground';
import GlitterField from './GlitterField';
import { barbieCards } from '../data/content';

/**
 * BarbieSection
 * Seção 5 — Estilo "Barbie Glam" com tapete vermelho e 3 cartões de citações
 * marcantes dela.
 */
export default function BarbieSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="barbie-titulo">
      <BarbieBackground />
      <GlitterField count={26} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal>
          <span className="mb-3 block text-center text-3xl" aria-hidden="true">💖</span>
          <h2 id="barbie-titulo" className="section-title text-[#a3132c]">
            Ícones de uma Princesa Moderna
          </h2>
          <p className="section-subtitle text-[#7a2035]">
            Porque você é glamour, atitude e doçura ao mesmo tempo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {barbieCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <article className="barbie-card">
                <span className="barbie-card__icon" aria-hidden="true">✨</span>
                <h3 className="barbie-card__title">{card.title}</h3>
                <p className="barbie-card__text">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
