import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import AboutSection from '../components/sections/about/AboutSection'
import MissionVisionSection from '../components/sections/about/MissionVisionSection'
import TeamSection from '../components/sections/about/TeamSection'

export default function AboutPage() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <PageHero
        pageTitle="ABOUT US · BEA Klik"
        title="Tentang Kami"
        subtitle="Mengenal lebih dekat PT Budaya Estetika Anugerah Production"
        theme="about"
        icon="🏢"
      />
      <AboutSection />
      <MissionVisionSection />
      <TeamSection />
    </motion.main>
  )
}
