import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import { portfolio } from '../../../data/portfolio'

const categories = ['All', 'Event', 'Entertainment', 'Corporate']

export default function PortfolioSection() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? portfolio : portfolio.filter(p => p.category === active)

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <SectionTitle label="Portfolio" title="Karya Kami" subtitle="Galeri dari berbagai acara dan proyek yang telah kami kerjakan" />
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? 'bg-primary text-white' : 'bg-warm-gray text-dark-text hover:bg-primary/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.image}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-xl overflow-hidden aspect-square"
              >
                <img src={item.image} alt={item.category} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                  <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
