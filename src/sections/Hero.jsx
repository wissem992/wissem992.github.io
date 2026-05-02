import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useData } from '../useData'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  const data = useData()
  const { t } = useTranslation()
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '8rem 4rem 6rem', position: 'relative', overflow: 'hidden',
    }}>
      {/* Glows */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '20%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

       

        {/* Heading */}
        <motion.h1 {...fadeUp(0.15)} style={{
          fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 800,
          lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem',
        }}>
          <span style={{ color: 'var(--accent)' }}>{data.name}</span>
          <span style={{ display: 'block', color: 'var(--text2)', fontSize: '0.58em', fontWeight: 600, marginTop: '0.3em' }}>
            {data.title}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p {...fadeUp(0.25)} style={{
          maxWidth: 580, fontSize: '1.1rem', color: 'var(--text2)',
          marginBottom: '3rem', lineHeight: 1.8,
        }}>
          {data.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.35)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
  <BtnPrimary href="#projects">{t('hero.cta_projects')}</BtnPrimary>
  {/* <BtnOutline href="#contact">{t('hero.cta_cv')}</BtnOutline> */}
</motion.div>

       
      </div>
    </section>
  )
}

function BtnPrimary({ href, children }) {
  return (
    <motion.a href={href}
      whileHover={{ y: -2, opacity: 0.9 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '14px 28px', background: 'var(--accent)',
        color: '#0A0E1A', borderRadius: 8, fontWeight: 500, fontSize: '0.95rem',
        border: 'none', cursor: 'pointer',
      }}
    >{children}</motion.a>
  )
}

function BtnOutline({ href, children }) {
  return (
    <motion.a href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '14px 28px', background: 'transparent',
        color: 'var(--text)', borderRadius: 8, fontWeight: 400, fontSize: '0.95rem',
        border: '1px solid var(--border)', cursor: 'pointer',
      }}
    >{children}</motion.a>
  )
}
