import { Link } from 'react-router-dom'
import allProducts from '../data/products.json'
import ProductCard from './ProductCard.jsx'

// The landing page shows only the first 6 products
const products = allProducts.slice(0, 6)

export default function FeaturedProducts() {
  return (
    <section id="shop" className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="text-center mb-14 md:mb-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-gold-dark font-medium mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide">
            Featured Pieces
          </h2>
          <div className="mt-5 mx-auto w-10 h-px bg-gold-light"/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-14 md:mt-20">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-cream text-xs tracking-[0.25em] uppercase px-10 py-4 rounded-full transition-all duration-200 font-medium"
          >
            View All Pieces
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
