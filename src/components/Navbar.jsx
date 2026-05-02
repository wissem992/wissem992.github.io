import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  // { label: 'Formation', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
const { i18n } = useTranslation()

const toggleLang = () => {
  i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')
}
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 4rem',
        background: scrolled ? 'rgba(10,14,26,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
    

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="nav-desktop">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{
              color: 'var(--text2)', fontSize: '0.875rem', fontWeight: 400,
              letterSpacing: '0.05em', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text2)'}
            >{l.label}</a>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleLang}
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 8, padding: '8px 14px',
          color: 'var(--text)', cursor: 'pointer',
          fontSize: '0.85rem', fontWeight: 500,
        }}
      >
        {i18n.language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
      </button>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </motion.nav>
  )
}
