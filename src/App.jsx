import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import { CurrencyProvider } from './context/CurrencyContext.jsx'
import LandingPage from './pages/LandingPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import CartPage from './pages/CartPage.jsx'
import CheckoutConfirmationPage from './pages/CheckoutConfirmationPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <CurrencyProvider>
      <CartProvider>
        <WishlistProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/"                       element={<LandingPage />} />
            <Route path="/shop"                   element={<ShopPage />} />
            <Route path="/product/:id"            element={<ProductDetailPage />} />
            <Route path="/cart"                   element={<CartPage />} />
            <Route path="/checkout-confirmation"  element={<CheckoutConfirmationPage />} />
          </Routes>
        </WishlistProvider>
      </CartProvider>
      </CurrencyProvider>
    </BrowserRouter>
  )
}
