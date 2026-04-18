import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import { MonkeyCard } from '../components/MonkeyCard'

const pageStyle: React.CSSProperties = {
  minHeight: '100svh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'radial-gradient(ellipse at center, #0c1a0f 0%, #1a3a2a 55%, #0a1f15 100%)',
}

const P5Page = () => (
  <div style={pageStyle}>
    <MonkeyCard
      imageUrl="https://loremflickr.com/400/560/monkey?lock=5"
      pageLabel="P5"
    />
  </div>
)

export const p5Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/p5',
  component: P5Page,
})
