import { useState, useMemo } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ProductCard from '../components/ProductCard.jsx'
import allProducts from '../data/products.json'

const CATEGORIES = [
  { key: 'all',      label: 'All' },
  { key: 'ring',     label: 'Rings' },
  { key: 'necklace', label: 'Necklaces' },
  { key: 'earring',  label: 'Earrings' },
  { key: 'bracelet', label: 'Bracelets' },
]

const SORT_OPTIONS = [
  { key: 'default',   label: 'Featured' },
  { key: 'price-asc', label: 'Price: Low to High' },
  { key: 'price-desc',label: 'Price: High to Low' },
  { key: 'newest',    label: 'Newest' },
]

// "Newest" is approximated by reverse id order (higher id = more recently added)
function applySort(products, sort) {
  const list = [...products]
  if (sort === 'price-asc')  return list.sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') return list.sort((a, b) => b.price - a.price)
  if (sort === 'newest')     return list.sort((a, b) => b.id - a.id)
  return list // 'default' — original order
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sort, setSort] = useState('default')

  const displayed = useMemo(() => {
    const filtered = activeCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory)
    return applySort(filtered, sort)
  }, [activeCategory, sort])

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans">
      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Page header */}
        <div className="bg-sand">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold-dark font-medium mb-3">
              The Collection
            </p>
            <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-wide">
              Shop All
            </h1>
            <div className="mt-5 w-10 h-px bg-gold-light"/>
          </div>
        </div>

        {/* Filter + sort bar */}
        <div className="sticky top-16 md:top-20 z-40 bg-cream/95 backdrop-blur-sm border-b border-gold-light/30">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`text-[10px] tracking-[0.2em] uppercase font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                    activeCategory === key
                      ? 'bg-gold border-gold text-cream'
                      : 'border-gold-light/60 text-stone hover:border-gold hover:text-gold'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Sort + count */}
            <div className="flex items-center gap-4 shrink-0">
              <p className="text-[10px] tracking-[0.15em] uppercase text-stone/60 hidden sm:block">
                {displayed.length} {displayed.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs tracking-wide text-stone bg-transparent border border-gold-light/60 rounded-full px-4 py-2 focus:outline-none focus:border-gold transition-colors duration-200 cursor-pointer"
              >
                {SORT_OPTIONS.map(({ key, label }) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          {displayed.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-charcoal mb-3">No pieces found</p>
              <p className="text-sm text-stone">Try a different category filter.</p>
            </div>
          ) : (
            <>
              {/* Mobile count */}
              <p className="text-[10px] tracking-[0.15em] uppercase text-stone/60 mb-6 sm:hidden">
                Showing {displayed.length} {displayed.length === 1 ? 'product' : 'products'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {displayed.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
