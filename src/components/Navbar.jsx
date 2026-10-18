import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useCurrency } from '../context/CurrencyContext.jsx'

const NAV_LINKS = ['Shop', 'Collections', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const { currency, toggleCurrency } = useCurrency()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_rgba(168,124,79,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center h-16 md:h-20">

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.15em] text-charcoal mr-auto hover:text-gold transition-colors duration-200"
        >
          Afro Jewels
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            link === 'Shop' ? (
              <Link
                key={link}
                to="/shop"
                className="text-xs tracking-[0.2em] uppercase text-stone hover:text-gold transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-200 group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs tracking-[0.2em] uppercase text-stone hover:text-gold transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-200 group-hover:w-full" />
              </a>
            )
          ))}
        </nav>

        {/* Icon row: currency toggle + search + cart + hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 ml-4 sm:ml-6 md:ml-8">

          {/* Currency toggle pill */}
          <button
            onClick={toggleCurrency}
            aria-label={`Switch to ${currency === 'USD' ? 'GHS' : 'USD'}`}
            className={`text-[9px] sm:text-[10px] tracking-[0.15em] font-medium px-2 sm:px-2.5 py-1 rounded-full border transition-all duration-200 leading-none ${
              currency === 'GHS'
                ? 'bg-gold border-gold text-cream'
                : 'border-gold-light/60 text-stone hover:border-gold hover:text-gold'
            }`}
          >
            {currency === 'USD' ? 'USD' : 'GHS'}
          </button>

          {/* Search — desktop only */}
          <button
            aria-label="Search"
            className="hidden md:block text-stone hover:text-gold transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>

          {/* Cart → /cart, live badge from context */}
          <Link
            to="/cart"
            aria-label={`Cart (${cartCount} item${cartCount !== 1 ? 's' : ''})`}
            className="relative text-stone hover:text-gold transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-cream text-[9px] font-medium rounded-full flex items-center justify-center leading-none">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger — mobile only */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-stone hover:text-gold transition-colors duration-200"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-cream border-t border-gold-light/40`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {NAV_LINKS.map((link) => (
            link === 'Shop' ? (
              <Link
                key={link}
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className="text-xs tracking-[0.25em] uppercase text-stone hover:text-gold transition-colors duration-200"
              >
                {link}
              </Link>
            ) : (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-xs tracking-[0.25em] uppercase text-stone hover:text-gold transition-colors duration-200"
              >
                {link}
              </a>
            )
          ))}

          {/* Mobile cart link */}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-stone hover:text-gold transition-colors duration-200"
          >
            Cart
            {cartCount > 0 && (
              <span className="w-4 h-4 bg-gold text-cream text-[9px] font-medium rounded-full flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile currency toggle */}
          <div className="flex items-center gap-3 pt-1">
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone/60">Currency</span>
            <button
              onClick={toggleCurrency}
              aria-label={`Switch to ${currency === 'USD' ? 'GHS' : 'USD'}`}
              className={`text-[10px] tracking-[0.15em] font-medium px-3 py-1 rounded-full border transition-all duration-200 ${
                currency === 'GHS'
                  ? 'bg-gold border-gold text-cream'
                  : 'border-gold-light/60 text-stone hover:border-gold hover:text-gold'
              }`}
            >
              {currency === 'USD' ? 'USD' : 'GHS'}
            </button>
          </div>

          {/* Mobile search */}
          <div className="relative mt-1">
            <input
              type="text"
              placeholder="Search pieces…"
              className="w-full bg-sand border border-gold-light/60 rounded-full px-5 py-2.5 text-xs text-charcoal placeholder-stone/50 tracking-wide focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-stone/50" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
        </nav>
      </div>
    </header>
  )
}
