import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/628111948080"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  )
}
