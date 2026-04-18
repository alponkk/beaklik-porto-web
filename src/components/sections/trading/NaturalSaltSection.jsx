import { motion } from 'framer-motion'
import useScrollReveal from '../../../hooks/useScrollReveal'

const benefits = ['Detoks Alami', 'Mencerahkan Kulit', 'Relaksasi Tubuh', 'Melembutkan Kulit', 'Perawatan Alami']
const reasons = ['Kualitas terjamin', 'Aman untuk semua jenis kulit', 'Cocok untuk penggunaan harian & spa', 'Kemewahan alami']

export default function NaturalSaltSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-3">
            <img src="/assets/trading/garam1.jpg" alt="Garam 1" className="rounded-card w-full h-48 object-cover" loading="lazy" />
            <img src="/assets/trading/garam2.jpg" alt="Garam 2" className="rounded-card w-full h-48 object-cover" loading="lazy" />
          </div>
          <div>
            <p className="label-text mb-2">Garam Alami</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Garam Alami Perawatan Tubuh</h2>
            <div className="mb-4">
              <h4 className="font-semibold text-dark text-sm mb-2">Manfaat:</h4>
              <div className="flex flex-wrap gap-2">
                {benefits.map((b, i) => (
                  <span key={i} className="bg-accent-teal/10 text-accent-teal px-3 py-1 rounded-full text-xs font-medium">{b}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-dark text-sm mb-2">Mengapa memilih kami:</h4>
              <ul className="space-y-1 text-sm text-dark-text">
                {reasons.map((r, i) => <li key={i}>✓ {r}</li>)}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
