import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import GreenIndustrySection from '../components/sections/trading/GreenIndustrySection'
import SouvenirSection from '../components/sections/trading/SouvenirSection'
import NaturalSaltSection from '../components/sections/trading/NaturalSaltSection'
import ProductGallery from '../components/sections/trading/ProductGallery'

export default function TradingPage() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <PageHero
        pageTitle="TRADING · BEA Klik"
        title="Produk Alami"
        subtitle="Produk Herbal & Perawatan Tubuh Alami, Media Tanam Berbasis Sumber Daya Alam"
        theme="trading"
        icon="🌿"
      />
      <GreenIndustrySection />
      <SouvenirSection />
      <NaturalSaltSection />
      <ProductGallery />
    </motion.main>
  )
}
