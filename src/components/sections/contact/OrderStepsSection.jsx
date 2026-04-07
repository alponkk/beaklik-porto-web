import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import useScrollReveal from '../../../hooks/useScrollReveal'

const steps = [
  { icon: '/assets/icons/janji.png', title: 'Buat Janji Temu', desc: 'Hubungi kami via WhatsApp, email, atau media sosial' },
  { icon: '/assets/icons/diskusi.png', title: 'Diskusi', desc: 'Diskusikan kebutuhan Anda dengan tim profesional kami' },
  { icon: '/assets/icons/invoice.png', title: 'Invoice', desc: 'Invoice pembayaran setelah kesepakatan' },
  { icon: '/assets/icons/kontrak.png', title: 'Perjanjian Kontrak', desc: 'Dokumen kontrak resmi' },
  { icon: '/assets/icons/eksekusi.png', title: 'Eksekusi', desc: 'Eksekusi strategi yang telah disepakati' },
]

export default function OrderStepsSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <SectionTitle label="Cara Order" title="Cara Memesan Layanan BEA Klik" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }} className="bg-white rounded-card p-5 text-center shadow-sm relative">
              <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
              <img src={s.icon} alt={s.title} className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-dark text-sm mb-1">{s.title}</h3>
              <p className="text-dark-text text-xs">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
