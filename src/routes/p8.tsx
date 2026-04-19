import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import { MonkeyCard } from '../components/MonkeyCard'

const pageStyle: React.CSSProperties = {
  minHeight: '100svh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'radial-gradient(ellipse at center, #0f0c29 0%, #302b63 55%, #24243e 100%)',
}

const P8Page = () => (
  <div style={pageStyle}>
    <MonkeyCard
      imageUrl="https://loremflickr.com/400/560/monkey?lock=8"
      pageLabel="P8"
    />
  </div>
)

export const p8Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/p8',
  component: P8Page,
})
