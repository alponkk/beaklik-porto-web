import { motion } from 'framer-motion'
import useScrollReveal from '../../../hooks/useScrollReveal'

export default function GreenIndustrySection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="label-text mb-2">Industri Hijau</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Industri Produk Hijau</h2>
            <p className="text-dark-text text-sm leading-relaxed mb-4">
              Kami mengembangkan produk ramah lingkungan berbasis sumber daya alam Indonesia. Dari pengolahan limbah kelapa hingga produk perawatan tubuh alami, kami berkomitmen untuk mendukung industri hijau yang berkelanjutan.
            </p>
            <ul className="space-y-2 text-sm text-dark-text">
              <li>· Pengolahan limbah kelapa menjadi produk bernilai</li>
              <li>· Kemitraan dengan petani lokal & UMKM hijau</li>
              <li>· Produk eco-friendly & sustainable</li>
            </ul>
          </div>
          <div className="rounded-card overflow-hidden">
            <img src="/assets/trading/handPlan.jpg" alt="Green Industry" className="w-full h-80 object-cover" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
