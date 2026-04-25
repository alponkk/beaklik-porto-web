import { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPackage, FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../../ui/SectionTitle'
import ProductCard from './ProductCard'
import ProductDetailModal from './ProductDetailModal'
import useProductManifest from '../../../hooks/useProductManifest'

/* ── Brand icons (inline SVG) ── */

function CoconutIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Coconut body */}
      <ellipse cx="32" cy="36" rx="22" ry="20" fill="#8B5E3C" />
      <ellipse cx="32" cy="36" rx="22" ry="20" fill="url(#coconutGrad)" />
      {/* Inner shell highlight */}
      <ellipse cx="32" cy="38" rx="17" ry="15" fill="#A0714F" opacity="0.5" />
      {/* Eyes and mouth */}
      <circle cx="24" cy="32" r="2.5" fill="#5C3A1E" />
      <circle cx="40" cy="32" r="2.5" fill="#5C3A1E" />
      <ellipse cx="32" cy="40" rx="3" ry="2" fill="#5C3A1E" />
      {/* Leaf on top */}
      <path d="M32 16 C26 10 18 12 16 18 C22 14 28 16 32 22Z" fill="#4CAF50" />
      <path d="M32 16 C38 10 46 12 48 18 C42 14 36 16 32 22Z" fill="#66BB6A" />
      <path d="M32 16 C30 8 32 4 34 2 C34 8 33 12 32 16Z" fill="#388E3C" />
      <defs>
        <linearGradient id="coconutGrad" x1="32" y1="16" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A0714F" />
          <stop offset="1" stopColor="#6D4228" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function SaltIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Salt pile / mound */}
      <path d="M8 48 Q16 28 32 26 Q48 28 56 48 Z" fill="url(#saltGrad)" />
      {/* Crystal facets */}
      <rect x="22" y="14" width="8" height="10" rx="1" fill="#E0F7FA" stroke="#B2EBF2" strokeWidth="1" transform="rotate(-10 26 19)" />
      <rect x="34" y="12" width="7" height="9" rx="1" fill="#E0F7FA" stroke="#B2EBF2" strokeWidth="1" transform="rotate(8 37.5 16.5)" />
      <rect x="28" y="8" width="6" height="8" rx="1" fill="#F1F8FF" stroke="#B2EBF2" strokeWidth="1" transform="rotate(-3 31 12)" />
      {/* Sparkles */}
      <circle cx="20" cy="38" r="1.5" fill="white" opacity="0.8" />
      <circle cx="44" cy="36" r="1" fill="white" opacity="0.7" />
      <circle cx="32" cy="42" r="1.2" fill="white" opacity="0.6" />
      {/* Base line */}
      <path d="M6 48 H58" stroke="#B0BEC5" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="saltGrad" x1="32" y1="26" x2="32" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAFAFA" />
          <stop offset="1" stopColor="#E0E0E0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const brandIcons = {
  cocoveen: CoconutIcon,
  garam: SaltIcon,
}

/* ── Auto-scrolling horizontal showcase ── */

function ProductShowcase({ products, onSelectProduct }) {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll effect
  useEffect(() => {
    const el = scrollRef.current
    if (!el || products.length === 0) return

    let raf
    const speed = 0.5 // px per frame

    function step() {
      if (!isPaused && el) {
        el.scrollLeft += speed
        // Loop: when reaching the end, jump back to start seamlessly
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0
        }
      }
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isPaused, products.length])

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-warm-gray to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-warm-gray to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto py-2 px-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {products.map((product, i) => (
          <div key={product.id} className="flex-shrink-0 w-56 sm:w-64">
            <ProductCard
              product={product}
              index={i}
              onSelect={onSelectProduct}
              compact
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Brand section ── */

function BrandSection({ brand, brandKey, onSelectProduct }) {
  const { name, tagline, products } = brand
  const isEmpty = !products || products.length === 0
  const [showAll, setShowAll] = useState(false)

  const IconComponent = brandIcons[brandKey]

  return (
    <div className="mb-16 last:mb-0">
      {/* Brand header */}
      <div className="flex items-center gap-4 mb-6">
        {IconComponent ? (
          <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center p-1.5">
            <IconComponent className="w-full h-full" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent-teal/10 flex items-center justify-center">
            <FiPackage className="text-primary" size={22} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl sm:text-3xl font-bold text-dark">{name}</h3>
          {tagline && (
            <p className="text-dark-light text-sm mt-0.5">{tagline}</p>
          )}
        </div>
        {!isEmpty && (
          <span className="hidden sm:inline bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0">
            {products.length} Produk
          </span>
        )}
      </div>

      {/* Products */}
      {isEmpty ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl p-12 text-center border border-gray-100"
        >
          {IconComponent ? (
            <div className="w-16 h-16 mx-auto mb-3 opacity-30">
              <IconComponent className="w-full h-full" />
            </div>
          ) : (
            <FiPackage className="mx-auto text-dark-light mb-3" size={40} />
          )}
          <p className="text-dark-light text-sm">Produk {name} segera hadir</p>
          <p className="text-dark-light/60 text-xs mt-1">Nantikan katalog produk terbaru kami</p>
        </motion.div>
      ) : (
        <>
          {/* Showcase mode: horizontal auto-scroll */}
          {!showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductShowcase
                products={products}
                onSelectProduct={onSelectProduct}
              />
            </motion.div>
          )}

          {/* Expanded grid mode */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                  {products.map((product, i) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={i}
                      onSelect={onSelectProduct}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* See all / collapse toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all bg-white text-dark hover:bg-primary hover:text-white border border-gray-200 hover:border-primary shadow-sm hover:shadow-md"
            >
              {showAll ? 'Tutup' : 'Lihat Semua'}
              <FiArrowRight
                size={16}
                className={`transition-transform duration-300 ${showAll ? 'rotate-[-90deg]' : 'rotate-90'}`}
              />
            </button>
          </div>
        </>
      )}
    </div>
  )
}

/* ── Main catalog ── */

export default function ProductCatalog() {
  const { brands, loading, error } = useProductManifest()
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleSelect = useCallback((product) => {
    setSelectedProduct(product)
  }, [])

  const handleClose = useCallback(() => {
    setSelectedProduct(null)
  }, [])

  return (
    <section className="section-padding bg-warm-gray" id="katalog-produk">
      <div className="container-max">
        <SectionTitle
          label="Produk"
          title="Katalog Produk"
          subtitle="Jelajahi koleksi produk ramah lingkungan kami"
        />

        {loading && (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-[3px] border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-dark-light text-sm">Gagal memuat katalog produk</p>
          </div>
        )}

        {brands && (
          <div>
            {/* Cocoveen first */}
            {brands.cocoveen && (
              <BrandSection
                brand={brands.cocoveen}
                brandKey="cocoveen"
                onSelectProduct={handleSelect}
              />
            )}

            {/* Divider */}
            <div className="my-12 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </div>

            {/* Ocealya / Garam */}
            {brands.garam && (
              <BrandSection
                brand={brands.garam}
                brandKey="garam"
                onSelectProduct={handleSelect}
              />
            )}
          </div>
        )}
      </div>

      {/* Product detail modal */}
      <ProductDetailModal product={selectedProduct} onClose={handleClose} />
    </section>
  )
}
