import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal'
import { EventOrganizerBg, EntertainmentBg, ITServicesBg, TradingBg } from './ThemedCanvasBg'

const themeBgMap = {
  '/event-organizer': EventOrganizerBg,
  '/entertainment': EntertainmentBg,
  '/it-services': ITServicesBg,
  '/trading': TradingBg,
}

export default function ServiceCard({ title, subtitle, color, route, icon, index = 0 }) {
  const [ref, isVisible] = useScrollReveal()
  const [hovered, setHovered] = useState(false)
  const BgComponent = themeBgMap[route]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={route}
        className="group block rounded-card overflow-hidden relative h-72 sm:h-80"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {BgComponent && <BgComponent />}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[1]" />

        {/* Centered emoji icon */}
        <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none" style={{ paddingBottom: '3rem' }}>
          <AnimatePresence>
            {hovered && icon && (
              <motion.span
                key="card-icon"
                initial={{ opacity: 0, scale: 0.2, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.2, rotate: 20 }}
                transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                className="text-4xl sm:text-5xl drop-shadow-lg"
              >
                {icon}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 z-[3]">
          <div className="w-10 h-1 rounded-full mb-3 transition-all duration-300 group-hover:w-16" style={{ backgroundColor: color }} />
          <h3 className="text-white font-bold text-lg">{title}</h3>
          {subtitle && <p className="text-white/70 text-sm mt-1">{subtitle}</p>}
          <span className="inline-block mt-3 text-sm font-semibold transition-colors duration-300" style={{ color }}>
            Selengkapnya →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
