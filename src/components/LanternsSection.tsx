import { useState } from 'react';
import Reveal from './Reveal';
import Modal from './Modal';
import LanternIcon, { type LanternIconName } from './icons/LanternIcon';
import LanternsSkyBackground from './LanternsSkyBackground';
import GlitterField from './GlitterField';
import { lanternCards } from '../data/content';

/**
 * LanternsSection
 * Seção 4 — "O Reino das 20 Surpresas". Grid responsivo (1/2/4 colunas) de
 * lanternas clicáveis que abrem um modal central acessível com o texto completo.
 */
export default function LanternsSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const activeCard = lanternCards.find((c) => c.id === openId) ?? null;

  return (
    <section
      className="relative overflow-hidden bg-lantern-gradient px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="reino-titulo"
    >
      <LanternsSkyBackground />
      <GlitterField count={34} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <span className="mb-3 block text-center text-3xl" aria-hidden="true">🏮</span>
          <h2 id="reino-titulo" className="section-title text-amber-50">
            20 Motivos Pelos Quais Você É Magia
          </h2>
          <p className="section-subtitle text-blue-50/85">Clique em cada lanterna e descubra.</p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lanternCards.map((card, index) => (
            <Reveal as="li" key={card.id} delay={(index % 8) * 60} className="list-none">
              <button
                type="button"
                className="lantern-card group"
                onClick={() => setOpenId(card.id)}
                aria-haspopup="dialog"
              >
                <span className="lantern-card__icon lantern-float" style={{ animationDelay: `${(index % 6) * 0.4}s` }}>
                  <LanternIcon name={card.icon as LanternIconName} className="h-24 w-16 sm:h-28 sm:w-20" />
                </span>
                <span className="lantern-card__number" aria-hidden="true">
                  {String(card.id).padStart(2, '0')}
                </span>
                <span className="lantern-card__title">{card.title}</span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <Modal isOpen={activeCard !== null} onClose={() => setOpenId(null)} titleId="lantern-modal-title">
        {activeCard && (
          <div className="flex flex-col items-center gap-4 text-center">
            <LanternIcon name={activeCard.icon as LanternIconName} className="h-28 w-20" />
            <h3 id="lantern-modal-title" className="font-display text-3xl text-[var(--royal-blue-dark)] sm:text-4xl">
              {activeCard.title}
            </h3>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{activeCard.modalText}</p>
            {activeCard.ref && (
              <time className="text-sm font-semibold text-[var(--gold-dark)]" dateTime={activeCard.ref}>
                🕐 Ref: {activeCard.ref}
              </time>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
