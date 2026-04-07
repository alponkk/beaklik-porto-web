import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedButton from '../../ui/AnimatedButton'

function FloatingParticles() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const particles = useRef([])
  const raf = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const colors = ['#FF6B2C', '#FF8F5C', '#FFBE2E', '#E84545', '#2EC4B6', '#3B82F6']

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.size = Math.random() * 4 + 1
        this.speedX = (Math.random() - 0.5) * 0.8
        this.speedY = (Math.random() - 0.5) * 0.8
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.5 + 0.2
        this.pulse = Math.random() * Math.PI * 2
      }
      update() {
        const dx = mouse.current.x - this.x
        const dy = mouse.current.y - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          this.x -= dx * 0.008
          this.y -= dy * 0.008
        }
        this.x += this.speedX
        this.y += this.speedY
        this.pulse += 0.02
        if (this.x < -10 || this.x > w + 10 || this.y < -10 || this.y > h + 10) this.reset()
      }
      draw() {
        const s = this.size + Math.sin(this.pulse) * 1.5
        ctx.beginPath()
        ctx.arc(this.x, this.y, Math.max(s, 0.5), 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity + Math.sin(this.pulse) * 0.15
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    particles.current = Array.from({ length: 80 }, () => new Particle())

    function drawConnections() {
      const pts = particles.current
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(255,107,44,${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, w, h)
      particles.current.forEach(p => { p.update(); p.draw() })
      drawConnections()
      raf.current = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />
}

function GradientOrbs() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -70, 50, 0], y: [0, 40, -60, 0], scale: [1, 0.8, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent-teal/15 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 w-[350px] h-[350px] rounded-full bg-accent-yellow/10 blur-[80px]"
      />
    </div>
  )
}

export default function HeroSection() {
  const fullText = 'PT. Budaya Estetika Anugerah Production'
  const [displayed, setDisplayed] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const sectionRef = useRef(null)

  const { scrollY } = useScroll()
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 150], [1, 0])

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setDisplayed(fullText.slice(0, ++i))
      if (i >= fullText.length) { clearInterval(timer); setTypingDone(true) }
    }, 45)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-[#0d0d1a]">
      {/* Animated gradient mesh background */}
      <GradientOrbs />
      {/* Interactive particle network */}
      <FloatingParticles />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />
      {/* Bottom fade to page bg */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-warm-white to-transparent z-[3]" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Logo badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="mb-6"
        >
          <img src="/assets/common/Logo.jpg" alt="BEA Klik" className="h-16 sm:h-20 mx-auto drop-shadow-2xl rounded-lg" />
        </motion.div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 min-h-[1.5em] leading-tight">
          <span className="bg-gradient-to-r from-primary via-accent-yellow to-primary-light bg-clip-text text-transparent">
            {displayed}
          </span>
          {!typingDone && <span className="text-primary animate-pulse">|</span>}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: typingDone ? 1 : 0, y: typingDone ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-white/70 text-sm sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          BEA PRO is a beautiful event, which brings together harmonies that create a captivating experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: typingDone ? 1 : 0, y: typingDone ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <AnimatedButton onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            Jelajahi Layanan Kami
          </AnimatedButton>
          <AnimatedButton variant="outline" href="https://wa.me/628111948080">
            Hubungi Kami
          </AnimatedButton>
        </motion.div>
      </div>

      {/* Scroll indicator — positioned at bottom of section, fades on scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
