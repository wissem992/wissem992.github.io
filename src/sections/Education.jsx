import { motion } from 'framer-motion'
import { SectionWrapper, FadeIn } from '../components/SectionWrapper'
import { useData } from '../useData'

export default function Education() {
  const data = useData()
  return (
    <SectionWrapper id="education">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>

        {/* Timeline */}
        <FadeIn>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.75rem' }}>
            Parcours académique
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.1 }}>
            Formation
          </h2>
          <p style={{ color: 'var(--text2)', marginBottom: '3rem' }}>
            Un cursus scientifique rigoureux orienté vers l'intelligence artificielle et l'informatique avancée.
          </p>

          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 1, background: 'var(--border)' }} />
            {data.education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ position: 'relative', marginBottom: '3rem', paddingLeft: '2rem' }}
              >
                <div style={{
                  position: 'absolute', left: '-2.55rem', top: 6,
                  width: 12, height: 12, background: 'var(--accent)',
                  borderRadius: '50%', boxShadow: '0 0 0 4px rgba(0,212,255,0.15)',
                }} />
                <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                  {e.period}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.25rem' }}>{e.degree}</h3>
                <div style={{ color: 'var(--text2)', fontSize: '0.9rem', marginBottom: '0.6rem' }}>{e.school}</div>
                <div style={{ color: 'var(--text3)', fontSize: '0.85rem' }}>{e.desc}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Extras */}
        <FadeIn delay={0.2}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.75rem' }}>
            Certifications & atouts
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.1 }}>
            Atouts
          </h2>
          <p style={{ color: 'var(--text2)', marginBottom: '3rem' }}>
            Au-delà des compétences techniques, des qualités essentielles en environnement professionnel.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {data.extras.map((ex, i) => (
              <motion.div
                key={ex.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ borderColor: 'rgba(0,212,255,0.3)' }}
                style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 14, padding: '1.25rem 1.5rem',
                }}
              >
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.3rem' }}>{ex.icon} {ex.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text2)' }}>{ex.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

      </div>
    </SectionWrapper>
  )
}
