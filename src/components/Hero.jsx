import { useCurrency } from '../context/CurrencyContext.jsx'

export default function Hero() {
  const { formatPrice } = useCurrency()
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F8F4EC] via-[#F0E9DA] to-[#E8DDCA]">
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(168,124,79,0.10) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-28 w-full flex flex-col md:flex-row items-center gap-12">

        {/* Text block */}
        <div className="flex-1 text-center md:text-left z-10">
          <p className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.35em] uppercase text-gold-dark font-medium mb-6 md:mb-8">
            <span className="w-5 h-px bg-gold-dark inline-block" />
            Est. 2019 · Handcrafted in Africa
          </p>
          <h1 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.15] tracking-wide mb-5 md:mb-6">
            Timeless pieces,
            <br />
            <em className="not-italic text-gold">modern edge</em>
          </h1>
          <p className="text-sm md:text-base text-stone tracking-wide leading-relaxed max-w-sm mx-auto md:mx-0 mb-10 md:mb-12">
            Jewelry rooted in African artistry, crafted for the contemporary soul.
          </p>

          {/* CTA group */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#shop"
              className="inline-block bg-gold hover:bg-gold-dark text-cream text-xs tracking-[0.25em] uppercase px-10 py-4 rounded-full transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Shop the Collection
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-stone hover:text-gold transition-colors duration-200 font-medium"
            >
              Our Story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-12">
            {[
              { icon: '✦', label: 'Ethically sourced' },
              { icon: '✦', label: `Free shipping over ${formatPrice(150)}` },
              { icon: '✦', label: '30-day returns' },
            ].map(({ icon, label }) => (
              <p key={label} className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-stone/60">
                <span className="text-gold text-[8px]">{icon}</span>
                {label}
              </p>
            ))}
          </div>
        </div>

        {/* Decorative earring illustration */}
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <EarringHeroSVG />
        </div>
      </div>

      {/* Animated scroll chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[9px] tracking-[0.3em] uppercase text-stone/50">Scroll</span>
        <svg
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          className="animate-bounce text-gold"
          aria-hidden="true"
        >
          <path
            d="M 1 1 L 9 9 L 17 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}

function EarringHeroSVG() {
  return (
    <svg
      viewBox="0 0 240 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-36 sm:w-48 md:w-56 lg:w-72 opacity-90"
      aria-hidden="true"
    >
      {/* ── Ear wire ─────────────────────────────── */}
      <line x1="120" y1="12" x2="120" y2="30"
            stroke="#A87C4F" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M 120 30 Q 152 30 152 56 Q 152 72 120 72"
            stroke="#A87C4F" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

      {/* ── Three oval chain links ────────────────── */}
      <ellipse cx="120" cy="82"  rx="5" ry="4" stroke="#A87C4F" strokeWidth="1.5"/>
      <ellipse cx="120" cy="94"  rx="5" ry="4" stroke="#A87C4F" strokeWidth="1.5"/>
      <ellipse cx="120" cy="106" rx="5" ry="4" stroke="#A87C4F" strokeWidth="1.5"/>

      {/* ── Decorative barrel bead ───────────────── */}
      <ellipse cx="120" cy="124" rx="22" ry="13" stroke="#A87C4F" strokeWidth="1.5"/>
      <line x1="98" y1="124" x2="142" y2="124" stroke="#A87C4F" strokeWidth="0.75"/>
      <circle cx="98"  cy="124" r="2.5" stroke="#A87C4F" strokeWidth="1.25"/>
      <circle cx="142" cy="124" r="2.5" stroke="#A87C4F" strokeWidth="1.25"/>

      {/* ── Connector post ───────────────────────── */}
      <line x1="120" y1="137" x2="120" y2="155"
            stroke="#A87C4F" strokeWidth="1.5" strokeLinecap="round"/>

      {/* ── Pear-shaped pendant — outer silhouette ── */}
      <path
        d="M 120 155
           C 178 163 204 234 204 290
           C 204 376 168 454 120 482
           C 72 454 36 376 36 290
           C 36 234 62 163 120 155 Z"
        stroke="#A87C4F" strokeWidth="1.5" fill="rgba(168,124,79,0.04)"
      />

      {/* ── Pear pendant — inner contour (filigree inset) ── */}
      <path
        d="M 120 173
           C 168 181 186 242 186 290
           C 186 368 155 438 120 460
           C 85 438 54 368 54 290
           C 54 242 72 181 120 173 Z"
        stroke="#A87C4F" strokeWidth="0.75" fill="none"
      />

      {/* ── Shoulder scrolls at top of pendant ──── */}
      <path d="M 76 200 Q 88 188 104 196"
            stroke="#A87C4F" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M 164 200 Q 152 188 136 196"
            stroke="#A87C4F" strokeWidth="1" fill="none" strokeLinecap="round"/>

      {/* ── Faceted oval gem inside pendant ─────── */}
      <ellipse cx="120" cy="328" rx="44" ry="60" stroke="#A87C4F" strokeWidth="1.5"/>
      <ellipse cx="120" cy="328" rx="28" ry="38" stroke="#A87C4F" strokeWidth="0.75"/>

      {/* Gem facet lines */}
      <line x1="120" y1="268" x2="120" y2="388" stroke="#A87C4F" strokeWidth="0.75"/>
      <line x1="76"  y1="328" x2="164" y2="328" stroke="#A87C4F" strokeWidth="0.75"/>
      <line x1="89"  y1="287" x2="151" y2="369" stroke="#A87C4F" strokeWidth="0.5"/>
      <line x1="151" y1="287" x2="89"  y2="369" stroke="#A87C4F" strokeWidth="0.5"/>

      {/* Cardinal accent dots */}
      <circle cx="120" cy="268" r="3" fill="#A87C4F"/>
      <circle cx="164" cy="328" r="3" fill="#A87C4F"/>
      <circle cx="120" cy="388" r="3" fill="#A87C4F"/>
      <circle cx="76"  cy="328" r="3" fill="#A87C4F"/>
    </svg>
  )
}
