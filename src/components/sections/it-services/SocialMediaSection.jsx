import { motion } from 'framer-motion'
import { FiEdit3, FiHeart, FiBarChart2 } from 'react-icons/fi'
import SectionTitle from '../../ui/SectionTitle'
import useScrollReveal from '../../../hooks/useScrollReveal'

const smServices = [
  { title: 'Manajemen Akun dan Pembuatan Konten', desc: 'Pengelolaan akun profesional dan konten kreatif yang engaging.', icon: FiEdit3, color: '#2EC4B6' },
  { title: 'Membangun Hubungan dan Loyalitas', desc: 'Strategi engagement untuk membangun komunitas yang loyal.', icon: FiHeart, color: '#FFBE2E' },
  { title: 'Laporan Kinerja dan Evaluasi', desc: 'Monitoring dan evaluasi performa media sosial secara berkala.', icon: FiBarChart2, color: '#E84545' },
]

export default function SocialMediaSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <SectionTitle label="Media Sosial" title="Layanan Manajemen Media Sosial" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {smServices.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-white rounded-card overflow-hidden shadow-sm flex flex-col sm:flex-row">
                <div className="w-full sm:w-40 h-32 sm:h-auto flex items-center justify-center flex-shrink-0" style={{ backgroundColor: s.color + '0A' }}>
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: s.color + '15' }}>
                    <Icon size={32} style={{ color: s.color }} />
                  </div>
                </div>
                <div className="p-5 flex-1">
                  <div className="w-8 h-1 rounded-full mb-3" style={{ backgroundColor: s.color }} />
                  <h3 className="font-bold text-dark mb-2 text-sm">{s.title}</h3>
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
