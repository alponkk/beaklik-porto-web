import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src="/assets/common/Logo.jpg" alt="BEA Klik" className="h-10 mb-4 rounded" />
            <h4 className="font-bold mb-2">PT Budaya Estetika Anugerah Production</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Jl. Marinir Tengah Blk. AD No.22, Pondok Kelapa, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta, Indonesia
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Tel. +6285285711320</li>
              <li>Email: csbea@beaklik.co.id</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              {[
                { icon: <FaTiktok />, href: 'https://tiktok.com/@beaklik' },
                { icon: <FaYoutube />, href: 'https://youtube.com/@BudayaEstetikaProduction' },
                { icon: <FaFacebook />, href: 'https://www.facebook.com/share/1B3h3hRpHf/?mibextid=wwXIfr' },
                { icon: <FaInstagram />, href: 'https://www.instagram.com/bea_klik/' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40">
          © 2025 PT Budaya Estetika Anugerah Production. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
