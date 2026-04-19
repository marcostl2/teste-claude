import { createRouter } from '@tanstack/react-router'
import { rootRoute } from './routes/__root'
import { indexRoute } from './routes/index'
import { p1Route } from './routes/p1'
import { p2Route } from './routes/p2'
import { p3Route } from './routes/p3'
import { p4Route } from './routes/p4'
import { p5Route } from './routes/p5'
import { p6Route } from './routes/p6'
import { p7Route } from './routes/p7'
import { p8Route } from './routes/p8'
import { p9Route } from './routes/p9'
import { p10Route } from './routes/p10'

const routeTree = rootRoute.addChildren([indexRoute, p1Route, p2Route, p3Route, p4Route, p5Route, p6Route, p7Route, p8Route, p9Route, p10Route])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
