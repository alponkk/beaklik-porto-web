import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import { allProducts, cocoveenProducts, garamProducts } from '../../../data/products'

const tabs = ['All', 'COOVEEN', 'OCEALYA']

export default function ProductGallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? allProducts : active === 'COOVEEN' ? cocoveenProducts : garamProducts

  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-max">
        <SectionTitle label="Products" title="Galeri Produk" />
        <div className="flex justify-center gap-2 mb-8">
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === tab ? 'bg-primary text-white' : 'bg-white text-dark-text hover:bg-primary/10'}`}>
              {tab}
            </button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <AnimatePresence>
            {filtered.slice(0, 15).map((p, i) => (
              <motion.div key={p.image} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                className="rounded-xl overflow-hidden aspect-square group">
                <img src={p.image} alt={p.category} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
