import { motion } from 'framer-motion'
import { FiEye } from 'react-icons/fi'

export default function ProductCard({ product, index, onSelect, compact = false }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35, delay: compact ? 0 : index * 0.04 }}
      className="group cursor-pointer h-full"
      onClick={() => onSelect(product)}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-warm-gray">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-dark-light">
              <svg className="w-16 h-16 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-dark text-xs font-medium px-3 py-1.5 rounded-full">
              <FiEye size={14} />
              Lihat Detail
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-3 sm:p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-dark text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          {product.description && (
            <p className="mt-1.5 text-dark-light text-xs leading-relaxed line-clamp-2">
              {product.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
