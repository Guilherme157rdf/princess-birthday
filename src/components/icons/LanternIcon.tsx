// ============================================================================
// LanternIcon
// Ilustração SVG desenhada manualmente de uma lanterna dourada flutuante,
// com um pequeno glifo central que identifica o conteúdo de cada cartão.
// Nenhuma imagem externa é utilizada — tudo é vetor inline.
// ============================================================================

export type LanternIconName =
  | 'mic'
  | 'bottle'
  | 'tower'
  | 'headphones'
  | 'chocolate'
  | 'moon-laugh'
  | 'palette'
  | 'hair'
  | 'book-heart'
  | 'cake'
  | 'tear-book'
  | 'recorder'
  | 'tangerine'
  | 'paint'
  | 'boat'
  | 'storm'
  | 'star-headphone'
  | 'house-map'
  | 'speech'
  | 'moon-letter';

function InnerGlyph({ name }: { name: LanternIconName }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'mic':
      return (
        <g {...common}>
          <rect x="9.2" y="4" width="5.6" height="9" rx="2.8" />
          <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0" />
          <line x1="12" y1="17" x2="12" y2="20" />
          <line x1="9" y1="20" x2="15" y2="20" />
        </g>
      );
    case 'bottle':
      return (
        <g {...common}>
          <path d="M9.5 3.5h5v3l1.5 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-10l1.5-2z" />
          <path d="M9.5 3.5h5" />
          <path d="M10.2 11.5c1.2 1 2.6-1 3.8 0" />
          <path d="M17 15.2c1.3.5 1.3 2.6 0 3.1" strokeDasharray="1.5 2" />
        </g>
      );
    case 'tower':
      return (
        <g {...common}>
          <path d="M9 20V9l3-3 3 3v11z" />
          <path d="M9 20h6" />
          <line x1="10.5" y1="12" x2="10.5" y2="12.01" />
          <line x1="13.5" y1="12" x2="13.5" y2="12.01" />
          <line x1="10.5" y1="15" x2="10.5" y2="15.01" />
          <line x1="13.5" y1="15" x2="13.5" y2="15.01" />
          <line x1="12" y1="6" x2="12" y2="4" />
        </g>
      );
    case 'headphones':
      return (
        <g {...common}>
          <path d="M5 14v-2a7 7 0 0 1 14 0v2" />
          <rect x="4" y="14" width="3.2" height="5" rx="1.2" />
          <rect x="16.8" y="14" width="3.2" height="5" rx="1.2" />
        </g>
      );
    case 'chocolate':
      return (
        <g {...common}>
          <rect x="4.5" y="7" width="15" height="10" rx="1.4" />
          <line x1="9.5" y1="7" x2="9.5" y2="17" />
          <line x1="14.5" y1="7" x2="14.5" y2="17" />
          <line x1="4.5" y1="12" x2="19.5" y2="12" />
        </g>
      );
    case 'moon-laugh':
      return (
        <g {...common}>
          <path d="M15.5 4.5a7.5 7.5 0 1 0 4 13.6A7.5 7.5 0 0 1 15.5 4.5z" />
          <path d="M9 15c.8 1 3 1 3.8 0" />
        </g>
      );
    case 'palette':
      return (
        <g {...common}>
          <path d="M12 4a8 8 0 1 0 0 16h1.2a1.8 1.8 0 0 0 1.3-3 1.6 1.6 0 0 1 1.2-2.7H17a3 3 0 0 0 3-3c0-4-3.6-7.3-8-7.3z" />
          <circle cx="8.3" cy="11" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="11" cy="8" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="14.5" cy="9" r="0.9" fill="currentColor" stroke="none" />
        </g>
      );
    case 'hair':
      return (
        <g {...common}>
          <path d="M12 3c3 0 5 3 4.5 6.5-.3 2 .8 3 .8 5 0 3-2.3 6.5-2.3 6.5" />
          <path d="M12 3c-3 0-5 3-4.5 6.5.3 2-.8 3-.8 5 0 3 2.3 6.5 2.3 6.5" />
          <path d="M9.5 9.5c1.5 1 3.5 1 5 0" />
        </g>
      );
    case 'book-heart':
      return (
        <g {...common}>
          <path d="M4 5.5A2 2 0 0 1 6 4h6v15H6a2 2 0 0 0-2 1.5z" />
          <path d="M20 5.5A2 2 0 0 0 18 4h-6v15h6a2 2 0 0 1 2 1.5z" />
          <path d="M12 9.5c.6-1 2.4-1 2.4.5 0 1.1-1.2 1.7-2.4 2.6-1.2-.9-2.4-1.5-2.4-2.6 0-1.5 1.8-1.5 2.4-.5z" />
        </g>
      );
    case 'cake':
      return (
        <g {...common}>
          <rect x="4.5" y="12" width="15" height="7" rx="1.2" />
          <path d="M4.5 12c0-2 2-2 3.4-3.2C9.2 7.7 9 6 9 6" />
          <path d="M19.5 12c0-2-2-2-3.4-3.2C14.8 7.7 15 6 15 6" />
          <line x1="12" y1="12" x2="12" y2="4.5" />
          <path d="M11 4.2c0-1 2-1 2 0s-2 1-2 0z" />
        </g>
      );
    case 'tear-book':
      return (
        <g {...common}>
          <path d="M5 4.5h14v14l-3-2-3 2-3-2-3 2z" />
          <path d="M12 8c1.5 1.6 2.2 2.7 2.2 3.7a2.2 2.2 0 1 1-4.4 0c0-1 .7-2.1 2.2-3.7z" />
        </g>
      );
    case 'recorder':
      return (
        <g {...common}>
          <circle cx="12" cy="12" r="8" />
          <line x1="7" y1="12" x2="7" y2="12" />
          <path d="M6 12v.01M9 9v6M12 7v10M15 9v6M18 12v.01" />
        </g>
      );
    case 'tangerine':
      return (
        <g {...common}>
          <circle cx="12" cy="13" r="7.2" />
          <path d="M12 5.8V4M10.5 4.8c1-1 2-1 3 0" />
          <path d="M12 6v14M6 11.5c3 2 9 2 12 0M6 16c3-1.6 9-1.6 12 0" />
        </g>
      );
    case 'paint':
      return (
        <g {...common}>
          <path d="M12 3s5 5.8 5 9.5a5 5 0 0 1-10 0C7 8.8 12 3 12 3z" />
          <path d="M9.3 13.5c1.2 1 3.2 1 4.4 0" />
        </g>
      );
    case 'boat':
      return (
        <g {...common}>
          <path d="M4 15h16l-2 4H6z" />
          <line x1="12" y1="15" x2="12" y2="4" />
          <path d="M12 5.5 17 9l-5 1.4z" />
          <path d="M12 10.4 8 12.5l4 1z" />
        </g>
      );
    case 'storm':
      return (
        <g {...common}>
          <path d="M7 15a4 4 0 0 1 .7-7.9A5.5 5.5 0 0 1 18 9.2 3.8 3.8 0 0 1 17 16.7H8" />
          <path d="M13 16l-2 3.2h2.4L11 23" />
        </g>
      );
    case 'star-headphone':
      return (
        <g {...common}>
          <path d="M12 3.5l1.1 2.4 2.6.3-1.9 1.9.5 2.6-2.3-1.3-2.3 1.3.5-2.6-1.9-1.9 2.6-.3z" />
          <path d="M6.5 17.5v-1.8a5.5 5.5 0 0 1 11 0v1.8" />
          <rect x="5.2" y="17.5" width="2.8" height="4" rx="1" />
          <rect x="16" y="17.5" width="2.8" height="4" rx="1" />
        </g>
      );
    case 'house-map':
      return (
        <g {...common}>
          <path d="M4.5 11.5 12 5l7.5 6.5" />
          <path d="M6.5 10v9h11v-9" />
          <path d="M10 19v-5h4v5" />
        </g>
      );
    case 'speech':
      return (
        <g {...common}>
          <path d="M4.5 6.5h15v9h-8.5L7 18.5v-3H4.5z" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <line x1="8" y1="12.7" x2="13" y2="12.7" />
        </g>
      );
    case 'moon-letter':
      return (
        <g {...common}>
          <path d="M16 4.5a6.5 6.5 0 1 0 3.5 12A7.8 7.8 0 0 1 16 4.5z" />
          <rect x="3.5" y="14.5" width="8.5" height="6" rx="1" />
          <path d="M3.5 15l4.25 3 4.25-3" />
        </g>
      );
    default:
      return null;
  }
}

interface LanternIconProps {
  name: LanternIconName;
  className?: string;
}

export default function LanternIcon({ name, className = '' }: LanternIconProps) {
  return (
    <svg
      viewBox="0 0 64 92"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {/* Fio superior */}
      <line x1="32" y1="0" x2="32" y2="10" stroke="#B8860B" strokeWidth="1.4" />
      {/* Topo da lanterna */}
      <path d="M20 10 L32 3 L44 10 Z" fill="#FFD700" stroke="#B8860B" strokeWidth="1" />
      <rect x="24" y="9" width="16" height="4" rx="1.5" fill="#E8B923" stroke="#B8860B" strokeWidth="1" />
      {/* Corpo da lanterna */}
      <rect x="14" y="13" width="36" height="52" rx="10" fill="url(#lanternBodyGradient)" stroke="#B8860B" strokeWidth="1.4" />
      <rect x="18" y="17" width="28" height="44" rx="7" fill="#FFF6D8" opacity="0.55" />
      {/* Base da lanterna */}
      <rect x="22" y="65" width="20" height="5" rx="1.8" fill="#E8B923" stroke="#B8860B" strokeWidth="1" />
      <path d="M26 70 L32 78 L38 70 Z" fill="#FFD700" stroke="#B8860B" strokeWidth="1" />
      {/* Glifo interior */}
      <foreignObject x="14" y="20" width="36" height="36">
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9860A' }}>
          <svg width="26" height="26" viewBox="0 0 24 24">
            <InnerGlyph name={name} />
          </svg>
        </div>
      </foreignObject>
      <defs>
        <linearGradient id="lanternBodyGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE9A8" />
          <stop offset="55%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#F2B705" />
        </linearGradient>
      </defs>
    </svg>
  );
}
