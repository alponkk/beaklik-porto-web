import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

export default function MobileDrawer({ open, onClose, items, pathname }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-warm-gray">
              <img src="/assets/common/Logo.jpg" alt="BEA Klik" className="h-8 rounded" />
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-warm-gray" aria-label="Close menu"><FiX size={20} /></button>
            </div>
            <nav className="flex-1 py-4 overflow-y-auto">
              {items.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`block px-6 py-3 text-sm font-medium transition-colors ${
                    pathname === item.path ? 'text-primary bg-primary/10 border-r-4 border-primary' : 'text-dark hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
