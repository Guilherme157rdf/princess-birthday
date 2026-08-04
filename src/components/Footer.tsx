/**
 * Footer
 * Seção 7 — Rodapé com mensagem final de encerramento.
 */
export default function Footer() {
  return (
    <footer className="relative bg-hero-gradient px-5 py-14 text-center text-blue-50 sm:px-8" role="contentinfo">
      <div className="mx-auto max-w-2xl">
        <span className="mb-3 block text-2xl" aria-hidden="true">🏰✨</span>
        <p className="text-base leading-relaxed sm:text-lg">
          Guardei cada &ldquo;meoo&rdquo;, cada data, cada sonho. Porque você merece ser lembrada em todos os
          detalhes.
        </p>
        <p className="mt-3 font-display text-2xl text-amber-100 sm:text-3xl">
          Te amo, hoje, amanhã e sempre.
        </p>
      </div>
    </footer>
  );
}
