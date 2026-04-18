import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import useScrollReveal from '../../../hooks/useScrollReveal'

const broadcastServices = [
  { title: 'Audio', image: '/assets/entertainment/audio.jpg' },
  { title: 'Audio Post', image: '/assets/entertainment/audio_post.jpg' },
  { title: 'Camera', image: '/assets/entertainment/live_video.jpg' },
  { title: 'Lighting', image: '/assets/entertainment/lighting.jpg' },
  { title: 'Mechanical', image: '/assets/entertainment/electric.jpg' },
  { title: 'Multimedia', image: '/assets/entertainment/edit_video.jpg' },
  { title: 'Stage Builder', image: '/assets/entertainment/stage.jpg' },
  { title: 'Studio', image: '/assets/entertainment/studio_f.jpg' },
]

const roles = ['Camera Person', 'Lighting Designer', 'Technical Director', 'Sound Engineer', 'Audio Person', 'Editor', 'Broadcast Engineer', 'Visual Team']

export default function BroadcastSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <SectionTitle label="Siaran" title="Layanan Broadcast & Multimedia" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {broadcastServices.map((s, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="group rounded-card overflow-hidden relative aspect-[4/3]">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">{s.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="bg-warm-gray rounded-card p-6 sm:p-8">
          <h3 className="font-bold text-dark mb-4 text-center">Peran Profesional</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {roles.map((r, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-sm text-dark-text font-medium shadow-sm">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
