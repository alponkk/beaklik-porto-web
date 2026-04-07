import { motion } from 'framer-motion'
import useScrollReveal from '../../../hooks/useScrollReveal'

export default function AboutSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center">
          <p className="label-text mb-4">Tentang BEA</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">PT Budaya Estetika Anugerah Production</h2>
          <p className="text-dark-text text-sm sm:text-base leading-relaxed mb-8">
            Didirikan pada tahun 2022 di Jakarta, PT Budaya Estetika Anugerah Production adalah perusahaan kreatif multidisiplin yang bergerak di bidang event organizer, entertainment production, IT services, dan trading produk alami. Kami menggabungkan seni, teknologi, dan alam untuk menciptakan pengalaman yang bermakna.
          </p>
          <div className="bg-gradient-to-r from-primary to-accent-red rounded-card p-6 sm:p-8 text-white">
            <h3 className="font-bold text-lg mb-2">Rencana Masa Depan</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Menjadi perusahan yang terintegrasi dalam menyediakan layanan media promosi, hiburan dan Support information technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
