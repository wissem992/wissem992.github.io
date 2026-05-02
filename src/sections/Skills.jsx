import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { SectionWrapper, FadeIn, SectionHeader } from '../components/SectionWrapper'
import { useData } from '../useData'

function SkillBar({ label, value, inView }) {
  
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text3)', marginBottom: 4 }}>
        <span>{label}</span><span>{value}%</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          style={{ height: '100%', borderRadius: 2, background: 'linear-gradient(90deg, var(--accent), var(--accent2))' }}
        />
      </div>
    </div>
  )
}

function SkillCard({ skill, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, borderColor: 'rgba(0,212,255,0.3)' }}
      style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 14, padding: '1.75rem', cursor: 'default',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
        }}
      />
      <div style={{
        width: 44, height: 44, background: 'rgba(0,212,255,0.1)',
        borderRadius: 10, marginBottom: '1rem', display: 'flex',
        alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
      }}>
        {skill.icon}
      </div>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{skill.title}</h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.6 }}>{skill.desc}</p>
       <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {skill.items.map(item => (
          <span key={item} style={{
            padding: '4px 10px',
            background: 'rgba(0,212,255,0.08)',
            border: '1px solid rgba(0,212,255,0.15)',
            color: 'var(--accent)', borderRadius: 6,
            fontSize: '0.75rem', fontWeight: 500,
          }}>
            {item}
          </span>
        ))}
      </div>
    
    </motion.div>
  )
}

export default function Skills() {
  const data = useData() 
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        label="Expertise technique"
        title="Mes compétences"
        // subtitle="Un ensemble de compétences couvrant la conception, le développement et l'optimisation de systèmes informatiques intelligents."
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}>
        {data.skills.map((s, i) => <SkillCard key={s.title} skill={s} delay={i * 0.08} />)}
      </div>
    </SectionWrapper>
  )
}
