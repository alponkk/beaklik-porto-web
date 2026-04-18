import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import useScrollReveal from '../../../hooks/useScrollReveal'

const videos = [
  { title: 'Corporate Profile', url: 'https://beaklik.co.id/videos/bea_profile_small.mp4' },
  { title: 'Video Documentary', url: 'https://beaklik.co.id/videos/GKJ_Promo1_small.mp4' },
  { title: 'Video Documentary', url: 'https://beaklik.co.id/videos/Maulid_Pamekasan_2022_small_small.mp4' },
  { title: 'Film Documentary', url: 'https://beaklik.co.id/videos/Video_1_small.mp4' },
]

function VideoCard({ video, isActive, onPlay }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    const el = videoRef.current
    if (!el) return
    if (playing) {
      el.pause()
      setPlaying(false)
    } else {
      onPlay()
      el.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  // Pause when another card becomes active
  if (!isActive && playing) {
    videoRef.current?.pause()
    setPlaying(false)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group relative rounded-card overflow-hidden aspect-video cursor-pointer bg-black"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={video.url}
        className="absolute inset-0 w-full h-full object-cover"
        preload="metadata"
        playsInline
        onEnded={() => setPlaying(false)}
      />
      {/* Play/pause overlay */}
      <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity ${playing ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
          {playing ? (
            <div className="flex gap-1">
              <div className="w-1.5 h-5 bg-primary rounded-sm" />
              <div className="w-1.5 h-5 bg-primary rounded-sm" />
            </div>
          ) : (
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-primary border-b-[8px] border-b-transparent ml-1" />
          )}
        </div>
      </div>
      {/* Title badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-md">{video.title}</span>
      </div>
    </motion.div>
  )
}

export default function ProductionSection() {
  const [ref, isVisible] = useScrollReveal()
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-max">
        <SectionTitle label="Film & Video" title="Produksi Film & Video" subtitle="Solusi Kreatif untuk Produksi Video & Hiburan Anda" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {videos.map((v, i) => (
            <VideoCard
              key={i}
              video={v}
              isActive={activeIndex === i}
              onPlay={() => setActiveIndex(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
