import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import HeroSection from '../components/sections/home/HeroSection'
import ServicesSection from '../components/sections/home/ServicesSection'
import EventsSection from '../components/sections/home/EventsSection'
import PortfolioSection from '../components/sections/home/PortfolioSection'
import CommitmentSection from '../components/sections/home/CommitmentSection'

export default function HomePage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <Helmet><title>HOME · BEA Klik</title></Helmet>
      <HeroSection />
      <ServicesSection />
      <EventsSection />
      <PortfolioSection />
      <CommitmentSection />
    </motion.main>
  )
}
