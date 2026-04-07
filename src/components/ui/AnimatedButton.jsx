import { motion } from 'framer-motion'

export default function AnimatedButton({ children, onClick, href, className = '', variant = 'primary' }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300'
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-warm-gray hover:shadow-lg',
  }

  const Comp = href ? motion.a : motion.button
  return (
    <Comp
      href={href}
      onClick={onClick}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Comp>
  )
}
