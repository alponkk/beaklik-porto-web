import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import useScrollReveal from '../../../hooks/useScrollReveal'

const steps = [
  { num: '01', title: 'Konsep & Penulisan Naskah' },
  { num: '02', title: 'Perekaman Audio/Video' },
  { num: '03', title: 'Editing & Post-Production' },
  { num: '04', title: 'Distribusi Digital' },
  { num: '05', title: 'Branding & Visual' },
]

const AUDIO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

function PodcastPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTime = () => setCurrentTime(audio.currentTime)
    const onMeta = () => setDuration(audio.duration || 0)
    const onEnded = () => setPlaying(false)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('durationchange', onMeta)
    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('durationchange', onMeta)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }, [playing])

  const seek = (e) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    audio.currentTime = ratio * duration
  }

  const fmt = (s) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
      <audio ref={audioRef} src={AUDIO_URL} preload="metadata" />
      <div className="flex items-center gap-4">
        <img src="/assets/entertainment/album_cover.jpg" alt="Podcast" className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold truncate">Episode 116: Straight from the Horse</p>
          <p className="text-white/40 text-xs">Randomness with Heath & Josh</p>
          <div className="mt-2 cursor-pointer" onClick={seek} role="progressbar" aria-valuenow={currentTime} aria-valuemax={duration}>
            <div className="h-1.5 bg-white/20 rounded-full relative">
              <div className="h-1.5 bg-primary rounded-full transition-all duration-150" style={{ width: `${progress}%` }} />
              <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-md transition-all duration-150" style={{ left: `calc(${progress}% - 6px)` }} />
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-white/40 text-[10px]">{fmt(currentTime)}</span>
            <span className="text-white/40 text-[10px]">{fmt(duration)}</span>
          </div>
        </div>
        <button
          onClick={togglePlay}
          className="flex-shrink-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dark transition-colors"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <div className="flex gap-0.5">
              <div className="w-1 h-4 bg-white rounded-sm" />
              <div className="w-1 h-4 bg-white rounded-sm" />
            </div>
          ) : (
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-0.5" />
          )}
        </button>
      </div>
    </div>
  )
}

export default function PodcastSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="section-padding bg-dark">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="label-text mb-2">Podcast</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Produksi Podcast</h2>
            <p className="text-primary-light text-lg font-semibold mb-4">Hidupkan Suaramu. Sampaikan Ceritamu.</p>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Kami membantu Anda membuat podcast profesional dari konsep hingga distribusi. Dengan studio dan tim produksi berpengalaman, suara Anda akan terdengar di seluruh platform digital.
            </p>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-4 bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="text-primary font-bold text-lg w-8">{s.num}</span>
                  <span className="text-white text-sm font-medium">{s.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              <div className="relative mb-4">
                <img src="/assets/entertainment/album_cover.jpg" alt="Podcast Cover" className="rounded-card shadow-2xl w-full" loading="lazy" />
                <div className="absolute inset-0 rounded-card overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
              <PodcastPlayer />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
