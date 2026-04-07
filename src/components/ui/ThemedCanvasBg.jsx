import { useEffect, useRef } from 'react'

function useCanvas(draw, deps = []) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)
    let running = true

    const cleanup = draw(ctx, () => w, () => h)

    function loop() {
      if (!running) return
      cleanup?.frame?.()
      requestAnimationFrame(loop)
    }
    loop()

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)
    return () => {
      running = false
      window.removeEventListener('resize', onResize)
      cleanup?.destroy?.()
    }
  }, deps)
  return canvasRef
}

export function EventOrganizerBg({ className = '' }) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)
    let t = 0, raf

    const spotlights = Array.from({ length: 5 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 1.5, vy: (Math.random() - 0.5) * 1.2,
      radius: 80 + Math.random() * 120,
      color: ['#FF6B2C', '#FFBE2E', '#E84545', '#FF8F5C', '#2EC4B6'][Math.floor(Math.random() * 5)],
    }))

    function animate() {
      ctx.fillStyle = 'rgba(15,10,30,0.15)'
      ctx.fillRect(0, 0, w, h)
      t += 0.01
      spotlights.forEach(s => {
        s.x += s.vx + Math.sin(t + s.radius) * 0.5
        s.y += s.vy + Math.cos(t + s.radius) * 0.3
        if (s.x < -50 || s.x > w + 50) s.vx *= -1
        if (s.y < -50 || s.y > h + 50) s.vy *= -1
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius)
        grad.addColorStop(0, s.color + '30')
        grad.addColorStop(0.5, s.color + '10')
        grad.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })
      raf = requestAnimationFrame(animate)
    }
    ctx.fillStyle = '#0f0a1e'
    ctx.fillRect(0, 0, w, h)
    raf = requestAnimationFrame(animate)
    const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}

export function EntertainmentBg({ className = '' }) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)
    let t = 0, raf

    const bars = Array.from({ length: 40 }, (_, i) => ({
      x: (w / 40) * i,
      speed: 0.02 + Math.random() * 0.03,
      phase: Math.random() * Math.PI * 2,
      color: i % 2 === 0 ? '#E84545' : '#FF6B2C',
    }))

    function animate() {
      ctx.fillStyle = '#1a0a1e'
      ctx.fillRect(0, 0, w, h)
      t += 0.016
      const barW = w / 40
      bars.forEach((b, i) => {
        b.x = (w / 40) * i
        const val = (Math.sin(t * b.speed * 60 + b.phase) + 1) / 2
        const bh = val * h * 0.6 + 10
        const grad = ctx.createLinearGradient(0, h - bh, 0, h)
        grad.addColorStop(0, b.color + '60')
        grad.addColorStop(1, b.color + '15')
        ctx.fillStyle = grad
        ctx.fillRect(b.x + 2, h - bh, barW - 4, bh)
        const grad2 = ctx.createLinearGradient(0, 0, 0, bh * 0.3)
        grad2.addColorStop(0, b.color + '08')
        grad2.addColorStop(1, 'transparent')
        ctx.fillStyle = grad2
        ctx.fillRect(b.x + 2, 0, barW - 4, bh * 0.3)
      })
      for (let i = 0; i < 6; i++) {
        const nx = (Math.sin(t * 0.5 + i * 1.2) + 1) / 2 * w
        const ny = (Math.cos(t * 0.3 + i * 0.8) + 1) / 2 * h
        ctx.beginPath()
        ctx.arc(nx, ny, 3, 0, Math.PI * 2)
        ctx.fillStyle = '#FFBE2E40'
        ctx.fill()
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}

export function ITServicesBg({ className = '' }) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)
    let t = 0, raf

    const nodes = Array.from({ length: 35 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6,
      size: 2 + Math.random() * 3,
    }))

    function animate() {
      ctx.fillStyle = '#0a1628'
      ctx.fillRect(0, 0, w, h)
      t += 0.005
      ctx.strokeStyle = '#2EC4B610'
      ctx.lineWidth = 0.5
      for (let x = 0; x < w; x += 50) {
        const offset = Math.sin(t + x * 0.01) * 5
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + offset, h); ctx.stroke()
      }
      for (let y = 0; y < h; y += 50) {
        const offset = Math.cos(t + y * 0.01) * 5
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y + offset); ctx.stroke()
      }
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(46,196,182,${0.2 * (1 - dist / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2)
        ctx.fillStyle = '#2EC4B680'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.size + 4, 0, Math.PI * 2)
        ctx.fillStyle = '#2EC4B610'
        ctx.fill()
      })
      const scanY = (Math.sin(t * 2) + 1) / 2 * h
      const scanGrad = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20)
      scanGrad.addColorStop(0, 'transparent')
      scanGrad.addColorStop(0.5, '#3B82F615')
      scanGrad.addColorStop(1, 'transparent')
      ctx.fillStyle = scanGrad
      ctx.fillRect(0, scanY - 20, w, 40)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}

export function TradingBg({ className = '' }) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)
    let raf

    const leaves = Array.from({ length: 25 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      size: 8 + Math.random() * 16,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      fallSpeed: 0.3 + Math.random() * 0.5,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.01 + Math.random() * 0.02,
      opacity: 0.15 + Math.random() * 0.25,
      color: ['#2EC4B6', '#22a89c', '#3dd4c6', '#1a9e8f'][Math.floor(Math.random() * 4)],
    }))

    function drawLeaf(x, y, size, rotation, color, opacity) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity
      ctx.beginPath()
      ctx.moveTo(0, -size)
      ctx.bezierCurveTo(size * 0.6, -size * 0.6, size * 0.6, size * 0.3, 0, size)
      ctx.bezierCurveTo(-size * 0.6, size * 0.3, -size * 0.6, -size * 0.6, 0, -size)
      ctx.fillStyle = color
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(0, -size * 0.8)
      ctx.lineTo(0, size * 0.8)
      ctx.strokeStyle = color
      ctx.globalAlpha = opacity * 0.5
      ctx.lineWidth = 0.5
      ctx.stroke()
      ctx.restore()
      ctx.globalAlpha = 1
    }

    function animate() {
      ctx.fillStyle = '#0a1a15'
      ctx.fillRect(0, 0, w, h)
      const t = Date.now() * 0.001
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        for (let x = 0; x <= w; x += 5) {
          const y = h * 0.5 + Math.sin(x * 0.005 + t + i) * 60 + i * 40
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath()
        ctx.fillStyle = `rgba(46,196,182,${0.03 + i * 0.01})`
        ctx.fill()
      }
      leaves.forEach(l => {
        l.y += l.fallSpeed
        l.sway += l.swaySpeed
        l.x += Math.sin(l.sway) * 0.8
        l.rotation += l.rotSpeed
        if (l.y > h + 20) { l.y = -20; l.x = Math.random() * w }
        drawLeaf(l.x, l.y, l.size, l.rotation, l.color, l.opacity)
      })
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}
