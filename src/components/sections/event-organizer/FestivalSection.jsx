import { motion } from 'framer-motion'
import useScrollReveal from '../../../hooks/useScrollReveal'

export default function FestivalSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="label-text mb-2">Festival</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Festival Budaya, Seni, & Pertunjukan Panggung</h2>
            <p className="text-dark-text text-sm leading-relaxed mb-6">
              Kami menghadirkan festival budaya yang memukau, pameran seni yang inspiratif, dan pertunjukan panggung yang tak terlupakan. Dari tarian tradisional hingga pertunjukan modern, kami merancang setiap detail untuk menciptakan pengalaman yang bermakna.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4">
              <p className="text-dark text-sm italic">"Siap menghidupkan panggung budaya Anda? BEA-EO timnya."</p>
            </div>
          </div>
          <div className="rounded-card overflow-hidden">
            <img src="/assets/event_organizer/tari.jpg" alt="Festival Budaya" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
