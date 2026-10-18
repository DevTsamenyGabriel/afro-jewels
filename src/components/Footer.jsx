import { Link } from 'react-router-dom'
import { useCurrency } from '../context/CurrencyContext.jsx'

const SHOP_LINKS = [
  { label: 'All Products',  to: '/shop' },
  { label: 'Rings',         to: '/shop' },
  { label: 'Necklaces',     to: '/shop' },
  { label: 'Earrings',      to: '/shop' },
  { label: 'Bracelets',     to: '/shop' },
]

const COMPANY_LINKS = [
  { label: 'About',               href: '#about' },
  { label: 'Contact',             href: '#contact' },
  { label: 'Shipping & Returns',  href: '#' },
  { label: 'FAQ',                 href: '#' },
]

export default function Footer() {
  const { formatPrice } = useCurrency()
  return (
    <footer id="contact" className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-8">

        {/* ── Three-column grid ──────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 mb-14 pb-14 border-b border-gold-light/20">

          {/* Brand column */}
          <div>
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl text-cream tracking-widest hover:text-gold-light transition-colors duration-200 inline-block mb-3"
            >
              Afro Jewels
            </Link>
            <p className="text-xs text-stone/70 tracking-wide leading-relaxed mb-8 max-w-[220px]">
              Connecting the ancient artistry of Africa to the contemporary world — one piece at a time.
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              <SocialLink href="#" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="#" label="X / Twitter">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="#" label="Pinterest">
                <PinterestIcon />
              </SocialLink>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-6">
              Shop
            </h4>
            <ul className="space-y-3.5">
              {SHOP_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-stone/70 hover:text-cream transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-6">
              Company
            </h4>
            <ul className="space-y-3.5">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-stone/70 hover:text-cream transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Shipping note */}
            <div className="mt-8 pt-6 border-t border-gold-light/10">
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-2">
                We ship worldwide
              </p>
              <p className="text-xs text-stone/50 leading-relaxed">
                Free shipping on orders over {formatPrice(150)}.
              </p>
            </div>
          </div>

        </div>

        {/* ── Copyright bar ──────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone/40 tracking-wide">
            © {new Date().getFullYear()} Afro Jewels. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-stone/40 hover:text-stone/70 transition-colors duration-200 tracking-wide">
              Privacy Policy
            </a>
            <span className="text-stone/20 text-xs">·</span>
            <a href="#" className="text-xs text-stone/40 hover:text-stone/70 transition-colors duration-200 tracking-wide">
              Terms of Use
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full border border-stone/30 hover:border-gold flex items-center justify-center text-stone/50 hover:text-gold transition-all duration-200"
    >
      {children}
    </a>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* X shape */}
      <path d="M 4 4 L 20 20 M 20 4 L 4 20" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 9h4a3 3 0 0 1 0 6h-3v5" />
    </svg>
  )
}
