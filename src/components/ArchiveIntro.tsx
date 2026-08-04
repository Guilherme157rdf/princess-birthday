import Reveal from './Reveal';

/**
 * ArchiveIntro
 * Seção 2 — "O Arquivo do Nosso Amor". Texto introdutório explicando o
 * propósito do site.
 */
export default function ArchiveIntro() {
  return (
    <section
      id="arquivo-do-amor"
      className="relative bg-archive-gradient px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="arquivo-titulo"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="mb-3 inline-block text-3xl" aria-hidden="true">📜</span>
          <h2 id="arquivo-titulo" className="section-title">
            O Arquivo do Nosso Amor
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-balance text-lg leading-relaxed text-slate-600 sm:text-xl">
            Esse site é a prova de que eu escuto cada palavra sua. Aqui estão as datas, os
            horários, as gírias, os sonhos. <span className="font-semibold text-[var(--royal-blue-dark)]">Tudo.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
