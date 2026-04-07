import { motion } from 'framer-motion'
import useScrollReveal from '../../../hooks/useScrollReveal'

const stageImages = ['/assets/event_organizer/stage1.jpg', '/assets/event_organizer/stage2.jpg', '/assets/event_organizer/stage3.jpg', '/assets/event_organizer/stage5.jpg', '/assets/event_organizer/stage6.jpg']

export default function ConcertSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="label-text mb-2 text-center">Corporate & Concert</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4 text-center">Launching Produk, Event Korporat & Konser</h2>
          <p className="text-dark-text text-sm leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            Dari ruang boardroom hingga panggung terbuka — kami siap bantu brand Anda bersinar. Kami menangani product launch, corporate gathering, dan konser musik dengan standar profesional.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {stageImages.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="rounded-xl overflow-hidden aspect-square">
                <img src={img} alt={`Stage ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 bg-accent-blue/5 border-l-4 border-accent-blue rounded-r-xl p-4 max-w-2xl mx-auto">
            <p className="text-dark text-sm italic">"Dari ruang boardroom hingga panggung terbuka — kami siap bantu brand Anda bersinar."</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
