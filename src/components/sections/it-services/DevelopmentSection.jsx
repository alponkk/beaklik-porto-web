import { motion } from 'framer-motion'
import { HiDevicePhoneMobile } from 'react-icons/hi2'
import { FiShield, FiServer } from 'react-icons/fi'
import SectionTitle from '../../ui/SectionTitle'
import useScrollReveal from '../../../hooks/useScrollReveal'

const devServices = [
  { title: 'Web & Mobile App Development', desc: 'Pengembangan aplikasi web dan mobile yang responsif, modern, dan user-friendly.', icon: HiDevicePhoneMobile, color: '#FF6B2C', bg: '#1A1A2E' },
  { title: 'IT Managed Service', desc: 'Monitoring 24/7, keamanan sistem, backup data, dan dukungan teknis profesional.', icon: FiShield, color: '#2EC4B6', bg: '#0f2028' },
  { title: 'Jaringan & Infrastruktur IT', desc: 'Perencanaan, instalasi, dan pemeliharaan jaringan serta infrastruktur IT perusahaan.', icon: FiServer, color: '#3B82F6', bg: '#0f1528' },
]

export default function DevelopmentSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-warm-white">
      <div className="container-max">
        <SectionTitle label="Pengembangan" title="Selamat Datang di BEA Teknologi" subtitle="Solusi teknologi yang fungsional, kreatif, dan terintegrasi" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devServices.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={i} whileHover={{ scale: 1.03, boxShadow: `0 8px 30px ${s.color}30` }}
                className="bg-white rounded-card overflow-hidden shadow-sm">
                <div className="h-32 flex items-center justify-center" style={{ backgroundColor: s.bg }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: s.color + '25' }}>
                    <Icon size={28} style={{ color: s.color }} />
                  </div>
                </div>
                <div className="p-4">
                  <div className="w-10 h-1 rounded-full mb-3" style={{ backgroundColor: s.color }} />
                  <h3 className="font-bold text-dark mb-2">{s.title}</h3>
                  <p className="text-dark-text text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
