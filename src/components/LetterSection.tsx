import Reveal from './Reveal';
import { finalLetterParagraphs } from '../data/content';

/**
 * LetterSection
 * Seção 6 — Carta final completa, de Guilherme para a princesa.
 */
export default function LetterSection() {
  return (
    <section className="relative bg-letter-gradient px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="carta-titulo">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="mb-3 block text-center text-3xl" aria-hidden="true">💌</span>
          <h2 id="carta-titulo" className="section-title">
            De Guilherme para a Minha Princesa
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="letter-paper">
            {finalLetterParagraphs.map((paragraph, i) => (
              <p key={i} className="letter-paper__paragraph">
                {paragraph}
              </p>
            ))}
            <p className="letter-paper__signature">
              O teu príncipe,
              <br />
              <span className="font-display text-3xl text-[var(--royal-blue-dark)]">Guilherme</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
