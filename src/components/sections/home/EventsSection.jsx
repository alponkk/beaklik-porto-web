import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import { events } from '../../../data/events'
import useScrollReveal from '../../../hooks/useScrollReveal'

export default function EventsSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-max">
        <SectionTitle label="Event" title="Event Terbaru" subtitle="Kegiatan dan acara yang telah kami selenggarakan" />
        {events.map((event, i) => (
          <motion.div
            key={i}
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow max-w-4xl mx-auto"
          >
            <img src={event.image} alt={event.title} className="w-full h-64 sm:h-80 object-cover" loading="lazy" />
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{event.date}</span>
                <span className="text-xs bg-accent-teal/10 text-accent-teal px-3 py-1 rounded-full font-semibold">{event.location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark mb-2">{event.title}</h3>
              <p className="text-dark-text text-sm">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
