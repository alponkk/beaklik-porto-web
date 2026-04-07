import { motion } from 'framer-motion'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function HoverCard({ icon, title, description, color = '#FF6B2C', index = 0 }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, boxShadow: `0 8px 30px ${color}25` }}
      className="bg-white rounded-card p-6 text-center cursor-default transition-shadow"
    >
      {icon && (
        typeof icon === 'string'
          ? <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />
          : typeof icon === 'function'
            ? <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: color + '15' }}>{icon({ size: 28, color })}</div>
            : <div className="text-4xl mb-4" style={{ color }}>{icon}</div>
      )}
      <h3 className="font-bold text-dark mb-2">{title}</h3>
      <p className="text-dark-text text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
