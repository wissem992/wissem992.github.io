import { useData } from '../useData'

export default function Footer() {
  const data = useData()
  return (
    <footer style={{
      padding: '2rem 4rem',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      color: 'var(--text3)', fontSize: '0.8rem', flexWrap: 'wrap', gap: '0.5rem',
    }}>
      <div>© {new Date().getFullYear()} — {data.name}. Tous droits réservés.</div>
      
    </footer>
  )
}
