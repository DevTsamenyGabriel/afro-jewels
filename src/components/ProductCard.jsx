import { useState } from 'react'
import { Link } from 'react-router-dom'
import { iconMap } from './ProductIcons.jsx'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCurrency } from '../context/CurrencyContext.jsx'

/**
 * Shared ProductCard used by FeaturedProducts, ShopPage, and ProductDetailPage.
 * Expects a product object shaped like products.json entries.
 *
 * Layout notes:
 * - Mobile: Add to Cart is always visible at the bottom (no hover needed on touch).
 * - Desktop (md+): Add to Cart slides up from underneath on card hover.
 * - Wishlist heart: always-visible when wishlisted, hover-revealed when not.
 * - Both wishlist and Add to Cart stop event propagation so the Link doesn't fire.
 */
export default function ProductCard({ product }) {
  const Icon = iconMap[product.iconType] ?? iconMap.ring
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const { formatPrice } = useCurrency()
  const [added, setAdded] = useState(false)
  const wishlisted = isWishlisted(product.id)

  function handleAdd(e) {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  function handleWishlist(e) {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist(product.id)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-cream flex flex-col items-center text-center transition-all duration-300 md:hover:-translate-y-1.5 md:hover:shadow-[0_12px_40px_rgba(168,124,79,0.18)] overflow-hidden"
    >
      {/* Badge */}
      {product.badge && (
        <span className={`absolute top-4 left-4 text-[9px] tracking-[0.2em] uppercase font-medium px-2.5 py-1 rounded-full ${
          product.badge === 'New'
            ? 'bg-charcoal text-cream'
            : 'bg-gold text-cream'
        }`}>
          {product.badge}
        </span>
      )}

      {/* Wishlist heart — always-visible when wishlisted, hover-revealed on desktop otherwise */}
      <button
        aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        onClick={handleWishlist}
        className={`absolute top-4 right-4 transition-all duration-200 ${
          wishlisted
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100 text-stone/30 hover:text-gold'
        }`}
      >
        {wishlisted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#A87C4F" stroke="#A87C4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        )}
      </button>

      {/* Main content */}
      <div className="p-6 md:p-10 w-full flex flex-col items-center">
        <div className="mb-6 md:mb-7 text-gold md:group-hover:text-gold-dark transition-colors duration-300">
          <Icon />
        </div>
        <h3 className="font-serif text-lg md:text-xl text-charcoal tracking-wide mb-1.5">{product.name}</h3>
        <p className="text-[10px] text-stone/70 tracking-[0.2em] uppercase mb-3">{product.material}</p>
        <p className="text-sm font-medium text-gold tracking-wide">{formatPrice(product.price)}</p>
      </div>

      {/*
        Add to Cart:
        - Mobile: always rendered, static at the bottom (no slide animation).
        - Desktop: hidden below the card edge, slides up into view on hover.
        Both use the same button so behaviour is consistent.
      */}
      <div className="w-full md:translate-y-full md:group-hover:translate-y-0 md:transition-transform md:duration-300 md:ease-out">
        <button
          onClick={handleAdd}
          className={`w-full py-3.5 text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-200 min-h-[44px] ${
            added
              ? 'bg-charcoal text-cream'
              : 'bg-gold hover:bg-gold-dark text-cream'
          }`}
        >
          {added ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </Link>
  )
}
