import { motion } from 'framer-motion'
import ImageCarousel from '../../ui/ImageCarousel'
import useScrollReveal from '../../../hooks/useScrollReveal'

const images = ['/assets/event_organizer/wedding1.jpg', '/assets/event_organizer/wedding2.jpg', '/assets/event_organizer/wedding3.jpg']

export default function WeddingSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <ImageCarousel images={images} />
          </div>
          <div className="order-1 lg:order-2">
            <p className="label-text mb-2">Acara Privat</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Pernikahan, Resepsi & Acara Privat</h2>
            <p className="text-dark-text text-sm leading-relaxed mb-6">
              Kami merancang momen spesial Anda dengan sentuhan personal dan profesional. Dari pernikahan intim hingga resepsi megah, setiap detail dirancang untuk menciptakan kenangan yang tak terlupakan.
            </p>
            <div className="bg-accent-red/5 border-l-4 border-accent-red rounded-r-xl p-4">
              <p className="text-dark text-sm italic">"Momen spesial Anda, kami rancang penuh rasa dan menjadi istimewa."</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
