import { useRef, useState, type KeyboardEvent } from 'react';
import Reveal from './Reveal';
import { tabCategories, slangItems, admirationGroups, type QuoteItem } from '../data/content';

function QuoteCard({ item }: { item: QuoteItem }) {
  return (
    <li className="quote-card">
      <p className="quote-card__text">{item.text}</p>
      {item.reply && <p className="quote-card__reply">{item.reply}</p>}
      {item.date && (
        <time className="quote-card__date" dateTime={item.date}>
          🕐 {item.date}
        </time>
      )}
    </li>
  );
}

/**
 * TimelineSection
 * Seção 3 — "Referências Encontradas". Sistema de abas 100% acessível
 * (padrão ARIA APG) com navegação por teclado (setas, Home, End).
 */
export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectTab = (index: number) => {
    const clamped = (index + tabCategories.length) % tabCategories.length;
    setActiveIndex(clamped);
    tabRefs.current[clamped]?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        selectTab(index + 1);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        selectTab(index - 1);
        break;
      case 'Home':
        e.preventDefault();
        selectTab(0);
        break;
      case 'End':
        e.preventDefault();
        selectTab(tabCategories.length - 1);
        break;
      default:
        break;
    }
  };

  const activeCategory = tabCategories[activeIndex];

  return (
    <section className="relative bg-archive-gradient px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="linha-do-tempo-titulo">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="mb-3 block text-center text-3xl" aria-hidden="true">🗺️</span>
          <h2 id="linha-do-tempo-titulo" className="section-title">
            Referências Encontradas
          </h2>
          <p className="section-subtitle">Uma linha do tempo com tudo que guardei sobre nós dois.</p>
        </Reveal>

        <Reveal delay={100}>
          <div
            role="tablist"
            aria-label="Categorias da linha do tempo"
            className="tabs-list mb-8 justify-center sm:flex-wrap sm:overflow-visible"
          >
            {tabCategories.map((cat, index) => (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                role="tab"
                type="button"
                id={`tab-${cat.id}`}
                aria-selected={activeIndex === index}
                aria-controls={`panel-${cat.id}`}
                tabIndex={activeIndex === index ? 0 : -1}
                className="tab-btn"
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.shortLabel}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`panel-${activeCategory.id}`}
          aria-labelledby={`tab-${activeCategory.id}`}
          tabIndex={0}
          className="tab-panel glass-card p-5 sm:p-8"
        >
          <h3 className="mb-6 text-center font-display text-3xl text-[var(--royal-blue-dark)] sm:text-4xl">
            {activeCategory.label}
          </h3>

          {activeCategory.id === 'girias' && (
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {slangItems.map((slang) => (
                <li key={slang.word} className="slang-chip">
                  <span className="slang-chip__word">{slang.word}</span>
                  {slang.date && (
                    <time className="slang-chip__date" dateTime={slang.date}>
                      {slang.date}
                    </time>
                  )}
                </li>
              ))}
            </ul>
          )}

          {activeCategory.id === 'admiracao' && (
            <div className="grid gap-8 md:grid-cols-2">
              {admirationGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="mb-4 text-center text-lg font-semibold text-[var(--sage-green)] sm:text-left">
                    {group.title}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {group.items.map((item, i) => (
                      <QuoteCard key={i} item={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeCategory.id !== 'girias' && activeCategory.id !== 'admiracao' && (
            <ul className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4">
              {activeCategory.items.map((item, i) => (
                <QuoteCard key={i} item={item} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
