import { motion } from 'framer-motion'
import useScrollReveal from '../../../hooks/useScrollReveal'

const reasons = [
  { icon: '/assets/icons/one_stop.png', title: 'Solusi Event Satu Pintu', desc: 'Semua kebutuhan event Anda dalam satu tempat', color: '#FF6B2C' },
  { icon: '/assets/icons/flexibility.png', title: 'Fleksibel untuk Semua Jenis Acara', desc: 'Dari intimate gathering hingga festival besar', color: '#FFBE2E' },
  { icon: '/assets/icons/professional_services.png', title: 'Berpengalaman & Terpercaya', desc: 'Tim profesional dengan pengalaman luas', color: '#2EC4B6' },
  { icon: '/assets/icons/event_dsgn.png', title: 'Desain Acara yang Berdampak', desc: 'Konsep kreatif yang meninggalkan kesan mendalam', color: '#E84545' },
]

export default function WhyUsSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-gradient-to-br from-[#1A1A2E] via-[#2a1a1a] to-[#1A1A2E] relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-teal/10 rounded-full blur-[100px]" />

      <div className="container-max relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="label-text text-center mb-2">Kenapa Kami</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">Mengapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-card p-6 text-center border border-white/10 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ backgroundColor: r.color + '20' }}>
                  <img src={r.icon} alt={r.title} className="w-10 h-10 brightness-0 invert" />
                </div>
                <h3 className="text-white font-bold mb-2">{r.title}</h3>
                <p className="text-white/50 text-sm">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
