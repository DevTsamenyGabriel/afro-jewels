import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useCart } from '../context/CartContext.jsx'

/** Generate a deterministic-looking fake order number on mount */
function generateOrderNumber() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = 'AJ-'
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

export default function CheckoutConfirmationPage() {
  const { clearCart } = useCart()

  // Generate once on mount, stable across re-renders
  const orderNumber = useRef(generateOrderNumber())

  // Clear cart exactly once when this page mounts
  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans">
      <Navbar />

      <main className="pt-16 md:pt-20 flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-lg w-full text-center py-16">

          {/* Animated check circle */}
          <div className="w-20 h-20 rounded-full border border-gold-light/60 bg-sand flex items-center justify-center mx-auto mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A87C4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>

          <p className="text-[10px] tracking-[0.35em] uppercase text-gold-dark font-medium mb-4">
            Order Confirmed
          </p>

          <h1 className="font-serif font-light text-4xl md:text-5xl text-charcoal tracking-wide leading-[1.2] mb-5">
            Thank you for<br />your order
          </h1>

          <div className="w-8 h-px bg-gold-light mx-auto mb-8" />

          <p className="text-sm text-stone leading-relaxed mb-6">
            Your pieces are being carefully prepared by our artisans. You'll receive a
            confirmation email shortly with your tracking details.
          </p>

          {/* Order number */}
          <div className="inline-block bg-sand border border-gold-light/50 px-8 py-4 mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone/60 mb-1">Order number</p>
            <p className="font-serif text-xl text-charcoal tracking-widest">{orderNumber.current}</p>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { icon: '✦', text: 'Ships within 3–5 days' },
              { icon: '✦', text: '30-day returns' },
              { icon: '✦', text: 'Ethically crafted' },
            ].map(({ icon, text }) => (
              <p key={text} className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-stone/50">
                <span className="text-gold text-[8px]">{icon}</span>
                {text}
              </p>
            ))}
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-cream text-xs tracking-[0.25em] uppercase px-10 py-4 rounded-full transition-all duration-200 font-medium"
          >
            Continue Shopping
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
