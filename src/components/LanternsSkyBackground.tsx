// ============================================================================
// LanternsSkyBackground
// Ilustração SVG inline no estilo minimalista: céu azul royal noturno com
// centenas de lanternas douradas flutuando e lua crescente, sem pessoas.
// ============================================================================

function seededLanterns(count: number, seedBase: number) {
  const items: { x: number; y: number; s: number; delay: number }[] = [];
  let seed = seedBase;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < count; i++) {
    items.push({
      x: rand() * 1200,
      y: rand() * 800,
      s: 0.35 + rand() * 0.8,
      delay: rand() * 5,
    });
  }
  return items;
}

const LANTERNS = seededLanterns(70, 12345);

export default function LanternsSkyBackground() {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Céu azul royal noturno com muitas lanternas douradas flutuando e uma lua crescente"
    >
      <defs>
        <radialGradient id="skyGlow" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#28409e" />
          <stop offset="60%" stopColor="#152a75" />
          <stop offset="100%" stopColor="#0a1338" />
        </radialGradient>
        <radialGradient id="lanternGlowSky" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe9a8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="1200" height="800" fill="url(#skyGlow)" />

      {/* Lua crescente */}
      <circle cx="980" cy="130" r="70" fill="#fff8e0" opacity="0.12" />
      <path d="M980 78a52 52 0 1 0 0 104 41 41 0 1 1 0-104z" fill="#fff8e0" />

      {LANTERNS.map((l, i) => (
        <g
          key={i}
          transform={`translate(${l.x} ${l.y}) scale(${l.s})`}
          className="lantern-float"
          style={{ animationDelay: `${l.delay}s`, animationDuration: `${5 + (i % 4)}s` }}
        >
          <circle cx="0" cy="0" r="22" fill="url(#lanternGlowSky)" />
          <rect x="-7" y="-12" width="14" height="20" rx="4" fill="#ffd700" stroke="#b8860b" strokeWidth="0.7" />
          <rect x="-8" y="-15" width="16" height="4.5" rx="1.8" fill="#ffe9a8" stroke="#b8860b" strokeWidth="0.5" />
        </g>
      ))}
    </svg>
  );
}
