import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionTitle from '../../ui/SectionTitle'
import { souvenirProducts } from '../../../data/products'

export default function SouvenirSection() {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let raf
    const speed = 0.5

    function step() {
      if (!isPaused && el) {
        el.scrollLeft += speed
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0
        }
      }
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isPaused])

  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-max">
        <SectionTitle label="Suvenir" title="Suvenir Berbasis Produk Alam & Budaya Lokal" />
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md rounded-full p-2" aria-label="Scroll left">
            <FiChevronLeft size={20} />
          </button>
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-8" style={{ scrollbarWidth: 'none' }}>
            {souvenirProducts.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="flex-shrink-0 w-56">
                <img src={img} alt={`Product ${i + 1}`} className="w-56 h-56 object-cover rounded-card shadow-sm" loading="lazy" />
              </motion.div>
            ))}
          </div>
          <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md rounded-full p-2" aria-label="Scroll right">
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
