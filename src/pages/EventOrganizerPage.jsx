import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import FestivalSection from '../components/sections/event-organizer/FestivalSection'
import WeddingSection from '../components/sections/event-organizer/WeddingSection'
import ConcertSection from '../components/sections/event-organizer/ConcertSection'
import WhyUsSection from '../components/sections/event-organizer/WhyUsSection'

export default function EventOrganizerPage() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <PageHero
        pageTitle="EVENT · BEA Klik"
        title="BEA — Event Organizer"
        subtitle="Menyatukan Budaya, seni dan hiburan dalam satu layanan terpadu."
        theme="event-organizer"
        icon="🎪"
      />
      <FestivalSection />
      <WeddingSection />
      <ConcertSection />
      <WhyUsSection />
    </motion.main>
  )
}
