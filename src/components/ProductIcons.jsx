/**
 * All product SVG icons in one place.
 * Each component uses stroke="currentColor" so the parent can tint via text-* classes.
 * iconMap lets you look up a component by the iconType string stored in products.json.
 */

export function RingIcon({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="54" rx="26" ry="9" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="40" cy="44" rx="26" ry="9" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="14" y1="44" x2="14" y2="54" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="66" y1="44" x2="66" y2="54" stroke="currentColor" strokeWidth="1.5"/>
      <polygon points="40,12 54,28 40,40 26,28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <line x1="26" y1="28" x2="54" y2="28" stroke="currentColor" strokeWidth="0.75"/>
      <line x1="40" y1="12" x2="40" y2="40" stroke="currentColor" strokeWidth="0.75"/>
      <line x1="26" y1="28" x2="40" y2="40" stroke="currentColor" strokeWidth="0.75"/>
      <line x1="54" y1="28" x2="40" y2="40" stroke="currentColor" strokeWidth="0.75"/>
    </svg>
  )
}

export function PendantIcon({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <path d="M 10 12 Q 40 5 70 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="40" y1="7" x2="40" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M 40 72 C 20 58 20 38 40 28 C 60 38 60 58 40 72 Z"
            stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <circle cx="40" cy="52" r="8" stroke="currentColor" strokeWidth="1"/>
      <circle cx="40" cy="52" r="3" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )
}

export function DropEarringIcon({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <path d="M 32 14 Q 32 6 40 6 Q 48 6 48 14 L 48 22"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <line x1="48" y1="22" x2="48" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="48" cy="52" rx="14" ry="22" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="48" cy="52" rx="7"  ry="12" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )
}

/**
 * CuffIcon — open-ended thick arc (C-shape), representing an open cuff bracelet.
 * Distinct from BangleIcon which is a closed circle.
 */
export function CuffIcon({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Main open-ended C arc — wide gap on the right */}
      <path d="M 58 22 A 26 26 0 1 0 58 58"
            stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Inner contour line to show thickness */}
      <path d="M 54 28 A 19 19 0 1 0 54 52"
            stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" fill="none"/>
      {/* Hammered texture dots along the outer arc */}
      <circle cx="14" cy="40" r="2"   stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="18" cy="24" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="18" cy="56" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="30" cy="14" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="30" cy="66" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  )
}

/**
 * BangleIcon — seamless closed circle (no gap), representing a slip-on bangle.
 * Distinct from CuffIcon which is an open C-shape.
 */
export function BangleIcon({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {/* Outer circle — the bangle itself */}
      <circle cx="40" cy="42" r="28" stroke="currentColor" strokeWidth="1.5"/>
      {/* Inner circle — shows the band width */}
      <circle cx="40" cy="42" r="20" stroke="currentColor" strokeWidth="0.75"/>
      {/* Etched geometric motif band — repeating short arcs inside the band */}
      {/* Top segment */}
      <path d="M 24 22 Q 40 16 56 22" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" fill="none"/>
      {/* Bottom segment */}
      <path d="M 24 62 Q 40 68 56 62" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" fill="none"/>
      {/* Left segment */}
      <path d="M 14 28 Q 8 42 14 56"  stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" fill="none"/>
      {/* Right segment */}
      <path d="M 66 28 Q 72 42 66 56" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" fill="none"/>
      {/* Four small dot accents at cardinal points on the outer ring */}
      <circle cx="40" cy="14" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="68" cy="42" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="40" cy="70" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="12" cy="42" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  )
}

export function HoopIcon({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="11" r="7"  stroke="currentColor" strokeWidth="1.5"/>
      <line x1="40" y1="18" x2="40" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="40" cy="46" r="24" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="40" cy="46" r="16" stroke="currentColor" strokeWidth="0.75"/>
      <circle cx="40" cy="74" r="4"  stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

export function LayeredChainIcon({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <path d="M 8 22 Q 40 15 72 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M 8 36 Q 40 29 72 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M 8 50 Q 40 43 72 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="40" y1="50" x2="40" y2="60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="40" cy="67" r="7"   stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="40" cy="67" r="2.5" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )
}

/** Map iconType string (from products.json) → icon component */
export const iconMap = {
  ring:         RingIcon,
  pendant:      PendantIcon,
  dropEarring:  DropEarringIcon,
  cuff:         CuffIcon,
  bangle:       BangleIcon,
  hoop:         HoopIcon,
  layeredChain: LayeredChainIcon,
}
