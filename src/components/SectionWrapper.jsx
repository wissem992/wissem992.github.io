import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function SectionWrapper({ children, id, bg, style = {} }) {
  return (
    <section id={id} style={{ padding: '7rem 4rem', background: bg || 'transparent', ...style }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {children}
      </div>
    </section>
  )
}

export function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeader({ label, title, subtitle }) {
  return (
    <FadeIn>
      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.75rem' }}>
        {label}
      </div>
      <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.1 }}>
        {title}
      </h2>
      {subtitle && <p style={{ color: 'var(--text2)', maxWidth: 500, marginBottom: '3.5rem' }}>{subtitle}</p>}
    </FadeIn>
  )
}
