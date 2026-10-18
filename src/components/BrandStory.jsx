import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="about" className="py-12 md:py-20 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-32">

          {/* ── Text column ────────────────────────────────── */}
          <div className="flex-1 md:max-w-lg">
            <p className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase text-gold-dark font-medium mb-5">
              <span className="w-5 h-px bg-gold-dark inline-block" />
              Our Story
            </p>

            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide leading-[1.2] mb-6">
              Crafted with intention,<br />worn with pride
            </h2>

            <div className="w-8 h-px bg-gold-light mb-8" />

            <p className="text-sm md:text-base text-stone leading-relaxed mb-5">
              Every Afro Jewels piece begins not with metal, but with memory — the geometric
              precision of Kente weaving, the hammered rhythms of Saharan metalwork, the sacred
              geometry encoded in Adinkra. We translate those inheritances into jewellery that
              belongs equally on a Lagos rooftop and a London gallery opening.
            </p>

            <p className="text-sm md:text-base text-stone leading-relaxed mb-5">
              We partner exclusively with master artisans across Ghana, Ethiopia, and Senegal,
              paying living wages and sourcing only recycled gold, ethically mined silver, and
              reclaimed brass. Sustainability isn't a badge we wear — it's the discipline we
              practise quietly, in every link and every setting.
            </p>

            <p className="text-sm md:text-base text-stone leading-relaxed">
              The result is jewellery with a point of view: modern enough to feel fresh,
              rooted enough to feel true.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-10 text-xs tracking-[0.25em] uppercase text-gold hover:text-gold-dark transition-colors duration-200 font-medium group"
            >
              Explore the collection
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>

          {/* ── Decorative illustration ─────────────────────── */}
          <div className="flex-1 flex justify-center md:justify-end items-center w-full">
            <AdinkraIllustration />
          </div>

        </div>
      </div>
    </section>
  )
}

/**
 * Thin-line geometric illustration inspired by Adinkra symbols and
 * West African textile patterns. All strokes are #A87C4F at 1.5px.
 * ViewBox 0 0 360 360, centred on 180,180.
 */
function AdinkraIllustration() {
  const CX = 180
  const CY = 180

  return (
    <svg
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-64 md:w-72 lg:w-80 xl:w-96 opacity-70 shrink-0"
      aria-hidden="true"
    >
      {/* ── Outer border square ── */}
      <rect x="20" y="20" width="320" height="320" stroke="#A87C4F" strokeWidth="1" />
      <rect x="30" y="30" width="300" height="300" stroke="#A87C4F" strokeWidth="0.5" />

      {/* ── Concentric circles ── */}
      <circle cx={CX} cy={CY} r="130" stroke="#A87C4F" strokeWidth="1" />
      <circle cx={CX} cy={CY} r="100" stroke="#A87C4F" strokeWidth="0.75" />
      <circle cx={CX} cy={CY} r="68"  stroke="#A87C4F" strokeWidth="1" />
      <circle cx={CX} cy={CY} r="36"  stroke="#A87C4F" strokeWidth="1.5" />
      <circle cx={CX} cy={CY} r="8"   stroke="#A87C4F" strokeWidth="1.5" />

      {/* ── Cardinal axes ── */}
      <line x1={CX} y1="20"  x2={CX} y2="340" stroke="#A87C4F" strokeWidth="0.75" />
      <line x1="20" y1={CY}  x2="340" y2={CY}  stroke="#A87C4F" strokeWidth="0.75" />

      {/* ── Diagonal axes ── */}
      <line x1="50"  y1="50"  x2="310" y2="310" stroke="#A87C4F" strokeWidth="0.5" />
      <line x1="310" y1="50"  x2="50"  y2="310" stroke="#A87C4F" strokeWidth="0.5" />

      {/* ── Gye Nyame-inspired eye/arch motifs on each cardinal ── */}
      {/* North arch */}
      <path d={`M ${CX - 28} ${CY - 68} Q ${CX} ${CY - 100} ${CX + 28} ${CY - 68}`}
            stroke="#A87C4F" strokeWidth="1.5" strokeLinecap="round" />
      {/* South arch */}
      <path d={`M ${CX - 28} ${CY + 68} Q ${CX} ${CY + 100} ${CX + 28} ${CY + 68}`}
            stroke="#A87C4F" strokeWidth="1.5" strokeLinecap="round" />
      {/* East arch */}
      <path d={`M ${CX + 68} ${CY - 28} Q ${CX + 100} ${CY} ${CX + 68} ${CY + 28}`}
            stroke="#A87C4F" strokeWidth="1.5" strokeLinecap="round" />
      {/* West arch */}
      <path d={`M ${CX - 68} ${CY - 28} Q ${CX - 100} ${CY} ${CX - 68} ${CY + 28}`}
            stroke="#A87C4F" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Diamond accents at cardinal points on outer ring ── */}
      {/* North */}
      <polygon points={`${CX},${CY - 140} ${CX + 8},${CY - 130} ${CX},${CY - 120} ${CX - 8},${CY - 130}`}
               stroke="#A87C4F" strokeWidth="1" fill="none" />
      {/* South */}
      <polygon points={`${CX},${CY + 140} ${CX + 8},${CY + 130} ${CX},${CY + 120} ${CX - 8},${CY + 130}`}
               stroke="#A87C4F" strokeWidth="1" fill="none" />
      {/* East */}
      <polygon points={`${CX + 140},${CY} ${CX + 130},${CY + 8} ${CX + 120},${CY} ${CX + 130},${CY - 8}`}
               stroke="#A87C4F" strokeWidth="1" fill="none" />
      {/* West */}
      <polygon points={`${CX - 140},${CY} ${CX - 130},${CY + 8} ${CX - 120},${CY} ${CX - 130},${CY - 8}`}
               stroke="#A87C4F" strokeWidth="1" fill="none" />

      {/* ── Diagonal corner ornaments (small rotated squares) ── */}
      <rect x="222" y="68"  width="14" height="14" rx="1" stroke="#A87C4F" strokeWidth="1" fill="none"
            transform="rotate(45 229 75)" />
      <rect x="222" y="278" width="14" height="14" rx="1" stroke="#A87C4F" strokeWidth="1" fill="none"
            transform="rotate(45 229 285)" />
      <rect x="68"  y="278" width="14" height="14" rx="1" stroke="#A87C4F" strokeWidth="1" fill="none"
            transform="rotate(45 75 285)" />
      <rect x="68"  y="68"  width="14" height="14" rx="1" stroke="#A87C4F" strokeWidth="1" fill="none"
            transform="rotate(45 75 75)" />

      {/* ── Inner petal motif (4-petal / cross-hatch inside inner ring) ── */}
      <path d={`M ${CX} ${CY - 36} Q ${CX + 26} ${CY - 26} ${CX + 36} ${CY}`}
            stroke="#A87C4F" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d={`M ${CX + 36} ${CY} Q ${CX + 26} ${CY + 26} ${CX} ${CY + 36}`}
            stroke="#A87C4F" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d={`M ${CX} ${CY + 36} Q ${CX - 26} ${CY + 26} ${CX - 36} ${CY}`}
            stroke="#A87C4F" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d={`M ${CX - 36} ${CY} Q ${CX - 26} ${CY - 26} ${CX} ${CY - 36}`}
            stroke="#A87C4F" strokeWidth="1" strokeLinecap="round" fill="none" />

      {/* ── Corner bracket details inside outer square ── */}
      {/* Top-left */}
      <path d="M 20 50 L 20 20 L 50 20" stroke="#A87C4F" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Top-right */}
      <path d="M 310 20 L 340 20 L 340 50" stroke="#A87C4F" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Bottom-right */}
      <path d="M 340 310 L 340 340 L 310 340" stroke="#A87C4F" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Bottom-left */}
      <path d="M 50 340 L 20 340 L 20 310" stroke="#A87C4F" strokeWidth="1" strokeLinecap="round" fill="none" />

      {/* ── Small dot accents at mid-ring intersections ── */}
      <circle cx={CX}        cy={CY - 100} r="3" fill="#A87C4F" />
      <circle cx={CX + 100}  cy={CY}       r="3" fill="#A87C4F" />
      <circle cx={CX}        cy={CY + 100} r="3" fill="#A87C4F" />
      <circle cx={CX - 100}  cy={CY}       r="3" fill="#A87C4F" />
    </svg>
  )
}
