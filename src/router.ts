import { createRouter } from '@tanstack/react-router'
import { rootRoute } from './routes/__root'
import { indexRoute } from './routes/index'
import { p1Route } from './routes/p1'
import { p2Route } from './routes/p2'
import { p3Route } from './routes/p3'
import { p4Route } from './routes/p4'

const routeTree = rootRoute.addChildren([indexRoute, p1Route, p2Route, p3Route, p4Route])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
