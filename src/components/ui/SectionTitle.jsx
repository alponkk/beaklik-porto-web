import { motion } from 'framer-motion'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function SectionTitle({ label, title, subtitle, center = true }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {label && <p className="label-text mb-2">{label}</p>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">{title}</h2>
      {subtitle && <p className="mt-4 text-dark-text max-w-2xl mx-auto text-sm sm:text-base">{subtitle}</p>}
    </motion.div>
  )
}
