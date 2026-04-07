import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import DevelopmentSection from '../components/sections/it-services/DevelopmentSection'
import DesignSection from '../components/sections/it-services/DesignSection'
import SocialMediaSection from '../components/sections/it-services/SocialMediaSection'

export default function ITServicesPage() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <PageHero
        pageTitle="IT SERVICE · BEA Klik"
        title="IT Service"
        subtitle="Web & Mobile App Development, Graphic Design and Digital Branding, Social Media Management"
        theme="it-services"
        icon="💻"
      />
      <DevelopmentSection />
      <DesignSection />
      <SocialMediaSection />
    </motion.main>
  )
}
