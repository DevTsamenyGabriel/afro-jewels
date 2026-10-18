import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import FeaturedProducts from '../components/FeaturedProducts.jsx'
import BrandStory from '../components/BrandStory.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <BrandStory />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
