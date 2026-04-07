import { motion } from 'framer-motion'
import AnimatedButton from '../../ui/AnimatedButton'
import useScrollReveal from '../../../hooks/useScrollReveal'

export default function TalentSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="label-text mb-2">Talent</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Manajemen Talent & Artis</h2>
            <p className="text-dark-text text-sm leading-relaxed mb-4">
              Kami menyediakan layanan casting talent, manajemen artis, dan pelatihan performa untuk mendukung kebutuhan produksi dan event Anda.
            </p>
            <ul className="space-y-2 text-sm text-dark-text mb-6">
              <li>— Talent Casting & Recruitment</li>
              <li>— Artist Management</li>
              <li>— Performance Training</li>
            </ul>
          </div>
          <div className="rounded-card overflow-hidden">
            <img src="/assets/entertainment/show_teater.jpg" alt="Talent Management" className="w-full h-80 object-cover" loading="lazy" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 bg-gradient-to-r from-primary to-accent-red rounded-card p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Apakah kamu yang selanjutnya?</h3>
          <p className="text-white/80 text-sm mb-4">Bergabunglah dengan talent kami dan tunjukkan bakatmu</p>
          <AnimatedButton href="https://wa.me/628111948080" variant="white">Daftar Sekarang</AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}
