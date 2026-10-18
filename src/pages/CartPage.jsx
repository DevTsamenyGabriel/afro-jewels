import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { iconMap } from '../components/ProductIcons.jsx'
import { useCart } from '../context/CartContext.jsx'
import { useCurrency } from '../context/CurrencyContext.jsx'

export default function CartPage() {
  const { cartItems, cartCount, cartTotal } = useCart()

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans">
      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Page header */}
        <div className="bg-sand">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold-dark font-medium mb-3">
              Your Selection
            </p>
            <h1 className="font-serif font-light text-4xl md:text-5xl text-charcoal tracking-wide">
              Shopping Cart
            </h1>
            <div className="mt-4 w-10 h-px bg-gold-light" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          {cartCount === 0 ? (
            <EmptyCart />
          ) : (
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* Item list */}
              <div className="flex-1 min-w-0">
                <CartItemList />
              </div>
              {/* Order summary */}
              <div className="w-full lg:w-80 shrink-0">
                <OrderSummary subtotal={cartTotal} />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

/* ── Empty state ──────────────────────────────────────────────────── */
function EmptyCart() {
  return (
    <div className="py-24 flex flex-col items-center text-center">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#D4B896" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-6 opacity-60">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      <h2 className="font-serif font-light text-3xl text-charcoal mb-3">Your cart is empty</h2>
      <p className="text-sm text-stone leading-relaxed mb-8 max-w-xs">
        You haven't added any pieces yet. Explore the collection and find something you love.
      </p>
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-cream text-xs tracking-[0.25em] uppercase px-10 py-4 rounded-full transition-colors duration-200 font-medium"
      >
        Continue Shopping
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </Link>
    </div>
  )
}

/* ── Cart item list ───────────────────────────────────────────────── */
function CartItemList() {
  const { cartItems } = useCart()

  return (
    <div className="divide-y divide-gold-light/30">
      {/* Column headers — desktop only */}
      <div className="hidden sm:grid grid-cols-[1fr_auto_auto_auto] gap-6 pb-4 text-[10px] tracking-[0.2em] uppercase text-stone/60">
        <span>Item</span>
        <span className="text-center">Qty</span>
        <span className="text-right">Price</span>
        <span />
      </div>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}

/* ── Single cart item row ─────────────────────────────────────────── */
function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart()
  const { formatPrice } = useCurrency()
  const Icon = iconMap[item.iconType] ?? iconMap.ring
  // lineTotal stays in USD; formatPrice converts for display
  const lineTotalUsd = item.price * item.quantity

  return (
    <div className="py-6 grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto_auto_auto] gap-x-5 gap-y-3 items-center">
      {/* Icon thumbnail */}
      <div className="w-16 h-16 bg-sand border border-gold-light/40 flex items-center justify-center shrink-0 text-gold">
        <Icon size={36} />
      </div>

      {/* Name + material */}
      <div className="min-w-0">
        <Link
          to={`/product/${item.id}`}
          className="font-serif text-base text-charcoal tracking-wide hover:text-gold transition-colors duration-200 leading-snug"
        >
          {item.name}
        </Link>
        <p className="text-[10px] tracking-[0.15em] uppercase text-stone/60 mt-0.5">{item.material}</p>
        {/* Mobile: line total below name */}
        <p className="text-sm font-medium text-gold mt-1 sm:hidden">
          {formatPrice(lineTotalUsd)}
        </p>
      </div>

      {/* Quantity selector */}
      <div className="col-start-2 sm:col-start-auto flex items-center border border-gold-light/60 rounded-full overflow-hidden w-fit">
        <button
          aria-label="Decrease quantity"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 flex items-center justify-center text-stone hover:text-gold hover:bg-sand transition-colors duration-200"
        >
          <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
            <line x1="0" y1="1" x2="10" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <span className="w-8 text-center text-xs text-charcoal font-medium">{item.quantity}</span>
        <button
          aria-label="Increase quantity"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center text-stone hover:text-gold hover:bg-sand transition-colors duration-200"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Line total — desktop */}
      <p className="hidden sm:block text-sm font-medium text-charcoal tracking-wide text-right">
        {formatPrice(lineTotalUsd)}
      </p>

      {/* Remove */}
      <button
        aria-label={`Remove ${item.name} from cart`}
        onClick={() => removeFromCart(item.id)}
        className="text-stone/40 hover:text-gold transition-colors duration-200 justify-self-end"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
          <path d="M10 11v6M14 11v6"/>
          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
        </svg>
      </button>
    </div>
  )
}

/* ── Order summary sidebar ────────────────────────────────────────── */
function OrderSummary({ subtotal }) {
  const navigate = useNavigate()
  const { formatPrice } = useCurrency()

  // Shipping threshold is always compared in USD (cart stores raw USD values).
  // formatPrice() is used only for display strings.
  const shippingUsd = subtotal >= 150 ? 0 : 12
  const totalUsd = subtotal + shippingUsd

  return (
    <div className="bg-sand border border-gold-light/40 p-8">
      <h2 className="font-serif font-light text-2xl text-charcoal tracking-wide mb-6">
        Order Summary
      </h2>
      <div className="w-8 h-px bg-gold-light mb-6" />

      <div className="space-y-3 mb-6 text-sm">
        <div className="flex justify-between text-stone">
          <span>Subtotal</span>
          <span className="text-charcoal font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-stone">
          <span>Shipping</span>
          <span className={shippingUsd === 0 ? 'text-gold font-medium' : 'text-charcoal font-medium'}>
            {shippingUsd === 0 ? 'Free' : formatPrice(shippingUsd)}
          </span>
        </div>
        {shippingUsd === 0 && (
          <p className="text-[10px] tracking-[0.1em] text-gold/80">
            ✦ Free shipping applied
          </p>
        )}
        {shippingUsd > 0 && (
          <p className="text-[10px] tracking-[0.1em] text-stone/50">
            Add {formatPrice(150 - subtotal)} more for free shipping
          </p>
        )}
      </div>

      <div className="border-t border-gold-light/40 pt-5 mb-8 flex justify-between items-baseline">
        <span className="text-xs tracking-[0.15em] uppercase text-stone">Total</span>
        <span className="font-serif text-2xl text-charcoal">{formatPrice(totalUsd)}</span>
      </div>

      <button
        onClick={() => navigate('/checkout-confirmation')}
        className="w-full bg-gold hover:bg-gold-dark text-cream text-xs tracking-[0.25em] uppercase py-4 rounded-full transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
      >
        Proceed to Checkout
      </button>

      <Link
        to="/shop"
        className="block text-center mt-4 text-[10px] tracking-[0.2em] uppercase text-stone/60 hover:text-gold transition-colors duration-200"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
