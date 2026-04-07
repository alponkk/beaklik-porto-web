import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import MobileDrawer from './MobileDrawer'

const navItems = [
  { label: 'Beranda', path: '/' },
  { label: 'Event Organizer', path: '/event-organizer' },
  { label: 'Entertainment', path: '/entertainment' },
  { label: 'IT Service', path: '/it-services' },
  { label: 'Trading', path: '/trading' },
  { label: 'Tentang Kami', path: '/about' },
  { label: 'Hubungi Kami', path: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setDrawerOpen(false) }, [pathname])

  // On home page at top: hide logo. Otherwise always show.
  const showLogo = !isHome || scrolled

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'}`}>
        <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 h-8 lg:h-10">
            <AnimatePresence mode="wait">
              {showLogo && (
                <motion.img
                  key="nav-logo"
                  src="/assets/common/Logo.jpg"
                  alt="BEA Klik"
                  className="h-8 lg:h-10 rounded"
                  initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.3, rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                />
              )}
            </AnimatePresence>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => {
              const active = pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-primary bg-primary/10'
                      : scrolled ? 'text-dark hover:text-primary hover:bg-primary/5' : 'text-white hover:text-primary-light hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <button onClick={() => setDrawerOpen(true)} className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-dark' : 'text-white'}`} aria-label="Open menu">
            <FiMenu size={24} />
          </button>
        </div>
      </header>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} items={navItems} pathname={pathname} />
    </>
  )
}
