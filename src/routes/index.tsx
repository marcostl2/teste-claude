import { createRoute, Link } from '@tanstack/react-router'
import { rootRoute } from './__root'
import './index.css'

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
})

function IndexPage() {
  return (
    <div className="home-page">
      <div className="home-header">
        <div className="home-icon">✦</div>
        <h1 className="home-title">Cartas Mágicas</h1>
        <p className="home-subtitle">Clique em uma carta para revelar a surpresa</p>
      </div>
      <div className="home-grid">
        <Link to="/p1" className="home-card-link">
          <div className="home-card-preview">
            <span className="home-card-symbol">✦</span>
            <span className="home-card-label">Carta #1</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
