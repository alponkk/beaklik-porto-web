import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import { team } from '../../../data/team'
import useScrollReveal from '../../../hooks/useScrollReveal'

export default function TeamSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <SectionTitle label="Team" title="Management Team" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03, y: -5 }} className="bg-white rounded-card overflow-hidden shadow-sm text-center group">
              <div className="overflow-hidden">
                <img src={t.image} alt={t.name} className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-dark text-sm">{t.name}</h3>
                <p className="text-primary text-xs font-medium mt-1">{t.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
