import { motion } from 'framer-motion'
import useScrollReveal from '../../../hooks/useScrollReveal'

const missions = [
  'Menyelenggarakan event berkualitas tinggi yang memadukan nilai budaya dan estetika',
  'Mengembangkan produksi hiburan yang inspiratif dan membangun karakter',
  'Memberikan solusi teknologi (Layanan IT) yang fungsional, kreatif, dan terintegrasi',
  'Menghadirkan produk alami yang ramah lingkungan dan menyehatkan',
]

export default function MissionVisionSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="label-text mb-2">Misi</p>
            <h2 className="text-3xl font-bold text-dark mb-6">Misi Kami</h2>
            <div className="space-y-4">
              {missions.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.15 }}
                  className="flex gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <p className="text-dark-text text-sm leading-relaxed">{m}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-gradient-to-br from-accent-teal to-accent-blue rounded-card p-8 text-white w-full">
              <p className="label-text text-white/60 mb-2">Visi</p>
              <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
              <p className="text-white/90 text-sm leading-relaxed">
                Menjadi perusahaan kreatif dan inovatif yang terdepan dalam menyatukan seni, teknologi, dan alam demi menciptakan pengalaman yang bermakna dan berdampak positif bagi masyarakat global.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
