import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'
import AnimatedButton from '../../ui/AnimatedButton'
import useScrollReveal from '../../../hooks/useScrollReveal'

export default function ContactFormSection() {
  const [ref, isVisible] = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: 'Pemohonan Kerjasama', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `Nama: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0A%0A${form.message}`
    window.open(`mailto:csbea@beaklik.co.id?subject=${encodeURIComponent(form.subject)}&body=${body}`)
  }

  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="bg-white rounded-card p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-dark mb-2">Kirim Pesan</h3>
            <input type="text" placeholder="Nama Lengkap" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              <option>Pemohonan Kerjasama</option>
              <option>Lain-lain</option>
            </select>
            <textarea placeholder="Pesan Anda" rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-warm-gray bg-warm-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />
            <AnimatedButton className="w-full justify-center">Kirim Pesan</AnimatedButton>
          </form>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-dark">Informasi Kontak</h3>
            <div className="space-y-4">
              {[
                { icon: <FiMapPin />, text: 'Kavling Marinir, Blk. AD No.22 Kota Jakarta Timur' },
                { icon: <FiClock />, text: 'Everyday 09 am - 07 pm' },
                { icon: <FiMail />, text: 'csbea@beaklik.co.id' },
                { icon: <FiPhone />, text: '(62-21) 2991 2166' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">{c.icon}</span>
                  <p className="text-dark-text text-sm pt-2">{c.text}</p>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-dark text-sm mb-3">Ikuti Kami</h4>
              <div className="flex gap-3">
                {[
                  { icon: <FiMail />, href: 'mailto:csbea@beaklik.co.id' },
                  { icon: <FaWhatsapp />, href: 'https://wa.me/628111948080' },
                  { icon: <FaInstagram />, href: 'https://instagram.com/BudayaEstetikaAnugerah' },
                  { icon: <FaFacebook />, href: 'https://facebook.com/BudayaEstetikaProduction' },
                  { icon: <FaYoutube />, href: 'https://youtube.com/@BudayaEstetikaProduction' },
                  { icon: <FaTiktok />, href: 'https://tiktok.com/@beaklik' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-warm-white border border-warm-gray flex items-center justify-center text-dark-text hover:bg-primary hover:text-white hover:border-primary transition-all">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
