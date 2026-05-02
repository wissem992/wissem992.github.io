import { SectionWrapper, FadeIn, SectionHeader } from '../components/SectionWrapper'
import { data } from '../data'

export default function About() {
  return (
    <SectionWrapper id="about" bg="var(--bg2)">
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '5rem', alignItems: 'center',
      }}>
        {/* Avatar */}
        <FadeIn>
          <div style={{ position: 'relative', maxWidth: 360 }}>
            <div style={{
              width: '100%', aspectRatio: '1',
              background: 'var(--bg3)', borderRadius: 16,
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Syne', fontSize: '5rem', fontWeight: 800,
              color: 'var(--accent)', letterSpacing: '-0.04em',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 30% 30%, rgba(0,212,255,0.12), transparent 60%)',
              }} />
              {data.initials}
            </div>
           
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.15}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.75rem' }}>
            À propos de moi
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.2rem', lineHeight: 1.1 }}>
            Passionné par les systèmes intelligents
          </h2>
          {data.about.split('\n\n').map((p, i) => (
            <p key={i} style={{ color: 'var(--text2)', marginBottom: '1.2rem' }}>{p}</p>
          ))}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: '1.5rem' }}>
            {data.aboutTags.map(tag => (
              <span key={tag} style={{
                padding: '5px 12px',
                background: 'rgba(0,212,255,0.08)',
                border: '1px solid rgba(0,212,255,0.2)',
                color: 'var(--accent)', borderRadius: 6,
                fontSize: '0.8rem', fontWeight: 500,
              }}>{tag}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
