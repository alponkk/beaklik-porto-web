import useScrollReveal from '../../../hooks/useScrollReveal'
import { motion } from 'framer-motion'

export default function MapSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="rounded-card overflow-hidden shadow-sm">
          <iframe
            title="BEA Klik Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.92516979075364!3d-6.236386928975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMTEuMCJTIDEwNsKwNTUnMzAuNiJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
