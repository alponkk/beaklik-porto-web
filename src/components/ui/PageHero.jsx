import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import { EventOrganizerBg, EntertainmentBg, ITServicesBg, TradingBg } from './ThemedCanvasBg'

// ── About & Contact backgrounds (only used in PageHero) ──

function AboutBg() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)
    let raf

    const rings = Array.from({ length: 6 }, (_, i) => ({
      radius: 60 + i * 50,
      speed: 0.003 + i * 0.001,
      offset: i * 0.5,
      color: ['#FF6B2C', '#FFBE2E', '#2EC4B6', '#3B82F6', '#E84545', '#FF8F5C'][i],
    }))

    function animate() {
      ctx.fillStyle = '#12101e'
      ctx.fillRect(0, 0, w, h)
      const t = Date.now() * 0.001
      const cx = w / 2, cy = h / 2
      rings.forEach(r => {
        const pulse = Math.sin(t * r.speed * 10 + r.offset) * 20
        ctx.beginPath()
        ctx.arc(cx, cy, r.radius + pulse, 0, Math.PI * 2)
        ctx.strokeStyle = r.color + '25'
        ctx.lineWidth = 2
        ctx.stroke()
        const angle = t * r.speed * 15 + r.offset
        const dx = cx + (r.radius + pulse) * Math.cos(angle)
        const dy = cy + (r.radius + pulse) * Math.sin(angle)
        ctx.beginPath()
        ctx.arc(dx, dy, 4, 0, Math.PI * 2)
        ctx.fillStyle = r.color + '80'
        ctx.fill()
      })
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80)
      grad.addColorStop(0, '#FF6B2C20')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(cx - 80, cy - 80, 160, 160)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

function ContactBg() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)
    let raf

    const ripples = []
    function addRipple() {
      ripples.push({ x: Math.random() * w, y: Math.random() * h, radius: 0, maxRadius: 80 + Math.random() * 120, opacity: 0.3 })
    }
    for (let i = 0; i < 4; i++) addRipple()

    function animate() {
      ctx.fillStyle = '#0e1225'
      ctx.fillRect(0, 0, w, h)
      const t = Date.now() * 0.001
      for (let i = 0; i < 4; i++) {
        ctx.beginPath()
        for (let x = 0; x <= w; x += 4) {
          const y = h * (0.3 + i * 0.15) + Math.sin(x * 0.008 + t * (0.8 + i * 0.2) + i) * 30
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = ['#FF6B2C15', '#3B82F612', '#2EC4B610', '#FFBE2E10'][i]
        ctx.lineWidth = 1.5
        ctx.stroke()
      }
      ripples.forEach((r, idx) => {
        r.radius += 0.5
        r.opacity -= 0.002
        if (r.opacity <= 0) { ripples.splice(idx, 1); addRipple(); return }
        ctx.beginPath()
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255,107,44,${r.opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      })
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

const bgComponents = {
  'event-organizer': EventOrganizerBg,
  entertainment: EntertainmentBg,
  'it-services': ITServicesBg,
  trading: TradingBg,
  about: AboutBg,
  contact: ContactBg,
}

export default function PageHero({ title, subtitle, pageTitle, theme = 'default', icon }) {
  const BgComponent = bgComponents[theme]

  return (
    <>
      <Helmet><title>{pageTitle}</title></Helmet>
      <section className="relative h-[50vh] min-h-[360px] max-h-[480px] flex items-center justify-center overflow-hidden">
        {BgComponent ? <BgComponent /> : <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#1a1a3e] to-dark" />}
        <div className="absolute inset-0 z-[2] opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-white to-transparent z-[3]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          {icon && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-block text-4xl mb-3"
            >
              {icon}
            </motion.span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">{title}</h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </section>
    </>
  )
}
