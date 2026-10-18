import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { iconMap } from '../components/ProductIcons.jsx'
import allProducts from '../data/products.json'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCurrency } from '../context/CurrencyContext.jsx'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = allProducts.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-cream text-charcoal font-sans">
        <Navbar />
        <main className="pt-16 md:pt-20 flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
          <p className="font-serif text-5xl text-gold mb-4">404</p>
          <h1 className="font-serif font-light text-3xl text-charcoal mb-3">Product not found</h1>
          <p className="text-sm text-stone mb-8">That piece may have been removed or the link is incorrect.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-cream text-xs tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-colors duration-200 font-medium"
          >
            Back to Shop
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans">
      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-2">
          <nav className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-stone/60">
            <Link to="/" className="hover:text-gold transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-gold transition-colors duration-200">Shop</Link>
            <span>/</span>
            <span className="text-stone">{product.name}</span>
          </nav>
        </div>

        {/* Two-column detail */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

            {/* Left: icon card */}
            <div className="w-full md:w-2/5 shrink-0">
              <ProductIconCard product={product} />
            </div>

            {/* Right: info + actions */}
            <div className="flex-1">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="bg-sand py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="mb-10 md:mb-14">
                <p className="text-[10px] tracking-[0.35em] uppercase text-gold-dark font-medium mb-3">
                  You May Also Like
                </p>
                <h2 className="font-serif font-light text-2xl md:text-3xl text-charcoal tracking-wide">
                  More {product.category.charAt(0).toUpperCase() + product.category.slice(0)}s
                </h2>
                <div className="mt-4 w-8 h-px bg-gold-light"/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

/* ── Icon display card ──────────────────────────────────────────── */
function ProductIconCard({ product }) {
  const Icon = iconMap[product.iconType] ?? iconMap.ring
  return (
    <div className="bg-sand border border-gold-light/40 flex items-center justify-center p-16 md:p-20 aspect-square">
      <div className="text-gold w-full max-w-[180px]">
        <Icon size={180} />
      </div>
    </div>
  )
}

/* ── Product info + quantity + add to cart ──────────────────────── */
function ProductInfo({ product }) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const { formatPrice } = useCurrency()
  const wishlisted = isWishlisted(product.id)

  function handleAdd() {
    addToCart(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div>
      {/* Badge */}
      {product.badge && (
        <span className={`inline-block text-[9px] tracking-[0.2em] uppercase font-medium px-3 py-1 rounded-full mb-5 ${
          product.badge === 'New'
            ? 'bg-charcoal text-cream'
            : 'bg-gold text-cream'
        }`}>
          {product.badge}
        </span>
      )}

      <h1 className="font-serif font-light text-4xl md:text-5xl text-charcoal tracking-wide leading-[1.15] mb-3">
        {product.name}
      </h1>

      <p className="text-[10px] tracking-[0.25em] uppercase text-stone/70 mb-6">
        {product.material}
      </p>

      <p className="font-serif text-3xl text-gold mb-8">{formatPrice(product.price)}</p>

      <div className="w-8 h-px bg-gold-light mb-8"/>

      <p className="text-sm md:text-base text-stone leading-relaxed mb-10">
        {product.description}
      </p>

      {/* Wishlist + quantity row */}
      <div className="flex items-center gap-6 mb-6">
        <button
          aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          onClick={() => toggleWishlist(product.id)}
          className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 group/wish"
        >
          {wishlisted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#A87C4F" stroke="#A87C4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone/50 group-hover/wish:text-gold transition-colors duration-200">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          )}
          <span className={wishlisted ? 'text-gold' : 'text-stone/60 group-hover/wish:text-gold transition-colors duration-200'}>
            {wishlisted ? 'Saved' : 'Save'}
          </span>
        </button>
      </div>

      {/* Quantity selector */}
      <div className="flex items-center gap-6 mb-6">
        <p className="text-[10px] tracking-[0.2em] uppercase text-stone/70">Quantity</p>
        <div className="flex items-center border border-gold-light/60 rounded-full overflow-hidden">
          <button
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-stone hover:text-gold hover:bg-sand transition-colors duration-200"
          >
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
              <line x1="0" y1="1" x2="12" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <span className="w-10 text-center text-sm text-charcoal font-medium">{qty}</span>
          <button
            aria-label="Increase quantity"
            onClick={() => setQty((q) => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-stone hover:text-gold hover:bg-sand transition-colors duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full text-xs tracking-[0.25em] uppercase font-medium transition-all duration-200 ${
          added
            ? 'bg-charcoal text-cream'
            : 'bg-gold hover:bg-gold-dark text-cream shadow-md hover:shadow-lg'
        }`}
      >
        {added ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Added to Cart
          </>
        ) : 'Add to Cart'}
      </button>

      {/* Trust micro-copy */}
      <div className="flex flex-wrap gap-5 mt-8">
        {[
          { icon: '✦', text: `Free shipping over ${formatPrice(150)}` },
          { icon: '✦', text: '30-day returns' },
          { icon: '✦', text: 'Ethically crafted' },
        ].map(({ icon, text }) => (
          <p key={text} className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-stone/50">
            <span className="text-gold text-[8px]">{icon}</span>
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}
