import { createRoute, Link } from '@tanstack/react-router'
import { rootRoute } from './__root'
import MagicCard from '../components/MagicCard'
import photo from '../assets/hero.png'

export const p1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/p1',
  component: P1Page,
})

function P1Page() {
  return (
    <div className="card-page">
      <Link to="/" className="card-page__back">← Voltar</Link>
      <MagicCard photo={photo} label="Carta #1" />
    </div>
  )
}
