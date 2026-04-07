import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppFAB from './components/layout/WhatsAppFAB'
import HomePage from './pages/HomePage'
import EventOrganizerPage from './pages/EventOrganizerPage'
import EntertainmentPage from './pages/EntertainmentPage'
import ITServicesPage from './pages/ITServicesPage'
import TradingPage from './pages/TradingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div className="font-poppins min-h-screen bg-warm-white">
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/event-organizer" element={<EventOrganizerPage />} />
          <Route path="/entertainment" element={<EntertainmentPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/trading" element={<TradingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
