import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import OrderStepsSection from '../components/sections/contact/OrderStepsSection'
import ContactFormSection from '../components/sections/contact/ContactFormSection'
import MapSection from '../components/sections/contact/MapSection'

export default function ContactPage() {
  return (
    <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <PageHero
        pageTitle="CONTACT · BEA Klik"
        title="Hubungi Kami"
        subtitle="Kami siap membantu mewujudkan kebutuhan Anda"
        theme="contact"
        icon="📬"
      />
      <OrderStepsSection />
      <ContactFormSection />
      <MapSection />
    </motion.main>
  )
}
