// ============================================================================
// BarbieBackground
// Ilustração SVG inline no estilo "Barbie Glam": silhuetas em tapete vermelho,
// vestido longo + terno, lanternas douradas e luzes de camarim, fundo rosa
// blush e dourado com glitter.
// ============================================================================

const BULBS = Array.from({ length: 22 }, (_, i) => i);

export default function BarbieBackground() {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Ilustração de duas silhuetas glamorosas em um tapete vermelho, com luzes de camarim douradas e fundo rosa"
    >
      <defs>
        <linearGradient id="barbieBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd8e2" />
          <stop offset="55%" stopColor="#ffc0cb" />
          <stop offset="100%" stopColor="#f3c05f" />
        </linearGradient>
        <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff6cf" />
          <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="1200" height="800" fill="url(#barbieBg)" />

      {/* Arco de luzes de camarim */}
      <path
        d="M40 260 C 300 -40, 900 -40, 1160 260"
        fill="none"
        stroke="#e8b923"
        strokeWidth="6"
      />
      {BULBS.map((i) => {
        const t = i / (BULBS.length - 1);
        const x = 40 + t * 1120;
        const y = 260 - Math.sin(t * Math.PI) * 300;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="16" fill="url(#bulbGlow)" />
            <circle cx={x} cy={y} r="6" fill="#fff6cf" stroke="#b8860b" strokeWidth="1" />
          </g>
        );
      })}

      {/* Tapete vermelho */}
      <polygon points="380,800 820,800 700,560 500,560" fill="#c81d3a" />
      <polygon points="380,800 500,560 470,560 340,800" fill="#a3132c" opacity="0.5" />

      {/* Silhueta feminina — vestido longo */}
      <g transform="translate(500 430)">
        <path
          d="M0 -80 C22 -80 30 -60 26 -40 C46 -10 40 60 60 170 L-60 170 C-40 60 -46 -10 -26 -40 C-30 -60 -22 -80 0 -80 Z"
          fill="#1a1a1a"
        />
        <circle cx="0" cy="-108" r="24" fill="#1a1a1a" />
        <path d="M-22 -118 C-30 -95 -26 -80 -14 -78 C-24 -92 -18 -108 -8 -116 Z" fill="#1a1a1a" />
        <path d="M22 -70 C40 -66 46 -50 44 -40" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
      </g>

      {/* Silhueta masculina — terno */}
      <g transform="translate(660 430)">
        <path d="M-34 170 L-30 20 C-30 -10 -14 -28 0 -28 C14 -28 30 -10 30 20 L34 170 Z" fill="#1a1a1a" />
        <circle cx="0" cy="-48" r="22" fill="#1a1a1a" />
        <path d="M-8 -28 L0 10 L8 -28 Z" fill="#c81d3a" />
        <path d="M-30 20 C-40 40 -40 60 -34 70" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
      </g>

      {/* Lanternas douradas subindo ao fundo */}
      {[
        { x: 150, y: 180, s: 0.7 },
        { x: 1020, y: 160, s: 0.8 },
        { x: 1100, y: 300, s: 0.55 },
        { x: 90, y: 340, s: 0.6 },
      ].map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) scale(${l.s})`} className="lantern-float" style={{ animationDelay: `${i * 0.5}s` }}>
          <circle cx="0" cy="0" r="26" fill="url(#bulbGlow)" />
          <rect x="-8" y="-14" width="16" height="24" rx="5" fill="#ffd700" stroke="#b8860b" strokeWidth="0.8" />
        </g>
      ))}
    </svg>
  );
}
