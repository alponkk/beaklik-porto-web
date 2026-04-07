import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import ProductionSection from '../components/sections/entertainment/ProductionSection'
import TalentSection from '../components/sections/entertainment/TalentSection'
import PodcastSection from '../components/sections/entertainment/PodcastSection'
import BroadcastSection from '../components/sections/entertainment/BroadcastSection'

export default function EntertainmentPage() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <PageHero
        pageTitle="ENTERTAINMENT · BEA Klik"
        title="Entertainment Production"
        subtitle="Film & music video production, Theater, dance, and live performances, Talent & artist management, Creative digital content production"
        theme="entertainment"
        icon="🎬"
      />
      <ProductionSection />
      <TalentSection />
      <PodcastSection />
      <BroadcastSection />
    </motion.main>
  )
}
