import { motion } from 'framer-motion'
import { SectionWrapper, FadeIn } from '../components/SectionWrapper'
import { data } from '../data'

const contactLinks = [
  { icon: '✉️', label: 'Email', value: data.email, href: `mailto:${data.email}` },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/votrenom', href: data.linkedin },
  { icon: '⌨️', label: 'GitHub', value: 'github.com/votrenom', href: data.github },
  { icon: '📍', label: 'Localisation', value: data.location, href: null },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" bg="var(--bg2)">
      <FadeIn>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.75rem' }}>
          Contact
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.1 }}>
          Travaillons ensemble
        </h2>
        <p style={{ color: 'var(--text2)', marginBottom: '2.5rem', maxWidth: 1500 }}>
          Je suis ouvert à des opportunités de stage, d'emploi ou de collaboration sur des projets innovants.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 1500 }}>
          {contactLinks.map(c => (
            <motion.a
              key={c.label}
              href={c.href || undefined}
              target={c.href?.startsWith('http') ? '_blank' : undefined}
              rel="noopener"
              whileHover={{ borderColor: 'rgba(0,212,255,0.3)', background: 'rgba(0,212,255,0.05)' }}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '1rem 1.25rem',
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 10, color: 'var(--text)',
                cursor: c.href ? 'pointer' : 'default',
              }}
            >
              <div style={{
                width: 40, height: 40, background: 'rgba(0,212,255,0.1)',
                borderRadius: 8, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0,
              }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontWeight: 1500, fontSize: '0.9rem' }}>{c.label}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </FadeIn>
    </SectionWrapper>
  )
}