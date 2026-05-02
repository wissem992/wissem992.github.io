import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { SectionWrapper, SectionHeader } from '../components/SectionWrapper'
import { data } from '../data'

function ProjectCard({ project, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, borderColor: 'rgba(124,58,237,0.4)' }}
      style={{
        background: project.featured
          ? 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(0,212,255,0.06))'
          : 'var(--bg3)',
        border: `1px solid ${project.featured ? 'rgba(124,58,237,0.25)' : 'var(--border)'}`,
        borderRadius: 16, padding: '2rem',
        display: 'flex', flexDirection: 'column',
        gridColumn: project.featured ? 'span 2' : 'span 1',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span style={{ fontSize: '2rem' }}>{project.icon}</span>
        <span style={{
          fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em',
          color: 'var(--accent2)', background: 'rgba(124,58,237,0.12)',
          border: '1px solid rgba(124,58,237,0.25)',
          padding: '3px 10px', borderRadius: 100,
        }}>{project.tag}</span>
      </div>
      <h3 style={{ fontFamily: 'Syne', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.7rem' }}>{project.title}</h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--text2)', flex: 1 }}>{project.desc}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.techs.map(t => (
            <span key={t} style={{
              fontSize: '0.72rem', padding: '4px 10px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border)',
              color: 'var(--text2)', borderRadius: 100,
            }}>{t}</span>
          ))}
        </div>
        {project.github && (
          <motion.a href={project.github} target="_blank" rel="noopener"
            whileHover={{ color: 'var(--accent)' }}
            style={{ fontSize: '0.82rem', color: 'var(--text3)', display: 'flex', alignItems: 'center', gap: 4 }}
          >
            GitHub ↗
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" bg="var(--bg2)">
      <SectionHeader
        label="Portfolio"
        title="Projets réalisés"
        subtitle="Une sélection de projets académiques et personnels illustrant mes compétences."
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
      }}>
        {data.projects.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 0.1} />)}
      </div>
      <style>{`
        @media (max-width: 700px) {
          #projects .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  )
}
