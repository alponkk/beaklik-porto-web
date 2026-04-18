import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import AnimatedButton from '../../ui/AnimatedButton'
import useScrollReveal from '../../../hooks/useScrollReveal'

const designs = [
  { title: 'Design Sertifikat', image: '/assets/brand/Design_sertif.jpg' },
  { title: 'Design Banner', image: '/assets/brand/Design_Banner.jpg' },
  { title: 'Design Kemasan', image: '/assets/brand/Design_Kemasan.jpg' },
  { title: 'Design Logo Profesional', image: '/assets/brand/Design_Logo_Profesional.jpg' },
  { title: 'Design Brosur', image: '/assets/brand/Design_Brosur.jpg' },
  { title: 'Design Merchandise', image: '/assets/brand/Design_Merchandise.jpg' },
]

export default function DesignSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-max">
        <SectionTitle label="Desain" title="Layanan Desain Grafis & Branding Digital" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((d, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white rounded-card overflow-hidden shadow-sm group">
              <div className="overflow-hidden">
                <img src={d.image} alt={d.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-bold text-dark text-sm">{d.title}</h3>
                <AnimatedButton href="https://wa.me/628111948080" className="text-xs px-4 py-2">Order Sekarang</AnimatedButton>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
