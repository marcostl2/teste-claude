import { createRoute, Link } from '@tanstack/react-router'
import { rootRoute } from './__root'

const IndexPage = () => (
  <div style={pageStyle}>
    <h1 style={{ color: '#ffd700', fontFamily: 'system-ui, sans-serif', marginBottom: 8 }}>
      🎴 Cartas do RAJ
    </h1>
    <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 40, fontFamily: 'system-ui, sans-serif' }}>
      Escolha uma carta para revelar o RAJ
    </p>
    <div style={{ display: 'flex', gap: 16 }}>
      {(['p1', 'p2', 'p3'] as const).map((p) => (
        <Link key={p} to={`/${p}`} style={cardLinkStyle}>
          {p.toUpperCase()}
        </Link>
      ))}
    </div>
  </div>
)

const pageStyle: React.CSSProperties = {
  minHeight: '100svh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'radial-gradient(ellipse at center, #0f0c29 0%, #302b63 55%, #24243e 100%)',
}

const cardLinkStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 80,
  height: 80,
  borderRadius: 16,
  background: 'rgba(255, 215, 0, 0.08)',
  border: '2px solid rgba(255, 215, 0, 0.3)',
  color: '#ffd700',
  textDecoration: 'none',
  fontWeight: 800,
  fontSize: 20,
  fontFamily: 'system-ui, sans-serif',
  transition: 'background 0.2s, border-color 0.2s',
}

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
})
