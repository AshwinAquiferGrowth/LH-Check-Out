import { useCart } from './context/CartContext'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import CollectionGrid from './components/CollectionGrid'
import FeaturedSection from './components/FeaturedSection'
import ProductDetail from './components/ProductDetail'
import ValueProps from './components/ValueProps'
import ShopAll from './components/ShopAll'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import CheckoutPage from './components/CheckoutPage'
import OrderConfirmation from './components/OrderConfirmation'
import GorgiasChat from './components/GorgiasChat'
import './App.css'

function App() {
  const { state } = useCart()
  const step = state.checkoutStep

  return (
    <div className="app">
      {/* Homepage */}
      {step === 0 && (
        <>
          <AnnouncementBar />
          <Header />
          <main>
            <Hero />
            <TrustBar />
            <CollectionGrid />
            <FeaturedSection />
            <ProductDetail />
            <ValueProps />
            <ShopAll />
          </main>
          <Footer />
        </>
      )}

      {/* Checkout: steps 1-3 */}
      {step >= 1 && step <= 3 && <CheckoutPage />}

      {/* Order confirmation */}
      {step === 4 && <OrderConfirmation />}

      {/* Cart drawer — always present */}
      <CartDrawer />

      {/* Gorgias chat — checkout only */}
      {step >= 1 && step <= 3 && <GorgiasChat />}
    </div>
  )
}

export default App
