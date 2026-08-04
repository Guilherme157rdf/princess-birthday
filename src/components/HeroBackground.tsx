// ============================================================================
// HeroBackground
// Ilustração SVG inline no estilo "Rapunzel Enrolados": silhuetas de casal no
// topo de uma torre, soltando lanternas douradas sob um céu estrelado.
// ============================================================================

const STARS = [
  { x: 40, y: 60, r: 1.6 }, { x: 120, y: 130, r: 1.2 }, { x: 200, y: 50, r: 1.8 },
  { x: 300, y: 90, r: 1.1 }, { x: 380, y: 40, r: 1.5 }, { x: 460, y: 120, r: 1.2 },
  { x: 60, y: 200, r: 1.3 }, { x: 150, y: 250, r: 1.1 }, { x: 260, y: 180, r: 1.6 },
  { x: 340, y: 220, r: 1.2 }, { x: 500, y: 60, r: 1.4 }, { x: 560, y: 160, r: 1.1 },
  { x: 620, y: 90, r: 1.6 }, { x: 700, y: 40, r: 1.2 }, { x: 780, y: 110, r: 1.5 },
  { x: 860, y: 60, r: 1.2 }, { x: 940, y: 150, r: 1.6 }, { x: 1020, y: 80, r: 1.2 },
  { x: 1100, y: 130, r: 1.4 }, { x: 1160, y: 50, r: 1.2 }, { x: 90, y: 320, r: 1 },
  { x: 220, y: 340, r: 1.3 }, { x: 400, y: 300, r: 1 }, { x: 650, y: 280, r: 1.2 },
  { x: 820, y: 260, r: 1 }, { x: 980, y: 300, r: 1.3 }, { x: 1120, y: 260, r: 1 },
];

const LANTERNS = [
  { x: 200, y: 340, s: 1 }, { x: 340, y: 220, s: 0.75 }, { x: 470, y: 300, s: 0.6 },
  { x: 610, y: 180, s: 0.85 }, { x: 720, y: 260, s: 0.55 }, { x: 850, y: 150, s: 0.9 },
  { x: 950, y: 240, s: 0.65 }, { x: 1080, y: 190, s: 0.7 }, { x: 560, y: 380, s: 0.5 },
  { x: 380, y: 400, s: 0.65 }, { x: 250, y: 150, s: 0.5 }, { x: 1000, y: 400, s: 0.55 },
];

export default function HeroBackground() {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Ilustração de um casal no topo de uma torre de castelo, soltando lanternas douradas sob um céu estrelado"
    >
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1338" />
          <stop offset="45%" stopColor="#16215c" />
          <stop offset="100%" stopColor="#2b4bc9" />
        </linearGradient>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8e0" />
          <stop offset="100%" stopColor="#fff8e0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe9a8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141b3f" />
          <stop offset="100%" stopColor="#080c22" />
        </linearGradient>
      </defs>

      {/* Céu */}
      <rect x="0" y="0" width="1200" height="800" fill="url(#heroSky)" />

      {/* Lua crescente */}
      <circle cx="1000" cy="120" r="80" fill="url(#moonGlow)" opacity="0.7" />
      <path
        d="M1000 60a60 60 0 1 0 0 120 48 48 0 1 1 0-120z"
        fill="#fff8e0"
      />

      {/* Estrelas */}
      {STARS.map((star, i) => (
        <circle key={i} cx={star.x} cy={star.y} r={star.r} fill="#ffffff" opacity="0.85" />
      ))}

      {/* Lanternas ao fundo */}
      {LANTERNS.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) scale(${l.s})`} className="lantern-float" style={{ animationDelay: `${i * 0.4}s` }}>
          <circle cx="0" cy="0" r="30" fill="url(#lanternGlow)" />
          <rect x="-8" y="-14" width="16" height="24" rx="5" fill="#ffd700" stroke="#b8860b" strokeWidth="0.8" />
          <rect x="-9" y="-18" width="18" height="5" rx="2" fill="#ffe9a8" stroke="#b8860b" strokeWidth="0.6" />
        </g>
      ))}

      {/* Silhueta da torre (esquerda) */}
      <path
        d="M0 800 V520 L60 480 L60 420 L40 420 L40 380 L100 380 L100 420 L80 420 L80 480 L160 520 V800 Z"
        fill="url(#towerGrad)"
      />
      {/* Silhueta da torre (direita, mais próxima, onde o casal está) */}
      <path
        d="M760 800 V430 L800 400 V330 L780 330 L780 290 L900 290 L900 330 L880 330 V400 L920 430 V800 Z"
        fill="url(#towerGrad)"
      />
      {/* Mureta da varanda */}
      <rect x="740" y="430" width="220" height="26" fill="#0a0f2b" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x={750 + i * 26} y="404" width="10" height="26" fill="#0a0f2b" />
      ))}

      {/* Casal — silhuetas de costas */}
      {/* Ela: com fones de ouvido */}
      <g transform="translate(818 355)">
        <path d="M-16 60 C-20 30 -14 5 0 0 C14 5 20 30 16 60 Z" fill="#0a0f2b" />
        <circle cx="0" cy="-14" r="15" fill="#0a0f2b" />
        <path d="M-16 -14 a16 16 0 0 1 32 0" fill="none" stroke="#0a0f2b" strokeWidth="4" />
        <circle cx="-16" cy="-6" r="4.5" fill="#0a0f2b" />
        <circle cx="16" cy="-6" r="4.5" fill="#0a0f2b" />
        <path d="M8 8 C22 2 30 -10 30 -10" fill="none" stroke="#0a0f2b" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Ele: com livro */}
      <g transform="translate(866 358)">
        <path d="M-15 58 C-18 28 -13 5 0 0 C13 5 18 28 15 58 Z" fill="#0a0f2b" />
        <circle cx="0" cy="-13" r="14" fill="#0a0f2b" />
        <path d="M-12 10 C-4 16 8 16 14 8" fill="none" stroke="#0a0f2b" strokeWidth="7" strokeLinecap="round" />
        <rect x="-2" y="10" width="16" height="12" rx="1.5" fill="#0a0f2b" />
      </g>

      {/* Lanterna sendo solta pelo casal */}
      <g transform="translate(842 300)" className="lantern-float">
        <circle cx="0" cy="0" r="24" fill="url(#lanternGlow)" />
        <rect x="-7" y="-12" width="14" height="20" rx="4" fill="#ffd700" stroke="#b8860b" strokeWidth="0.8" />
      </g>

      {/* Névoa suave no horizonte */}
      <rect x="0" y="700" width="1200" height="100" fill="#0b1338" opacity="0.55" />
    </svg>
  );
}
