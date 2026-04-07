import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function ImageCarousel({ images, autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length])

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, next])

  return (
    <div className="relative rounded-card overflow-hidden group">
      <div className="aspect-video relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
      </div>
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Previous">
        <FiChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Next">
        <FiChevronRight size={20} />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/50'}`} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}
