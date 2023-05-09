// Generouted, changes to this file will be overriden
import { Fragment } from 'react'
import { lazy, Outlet, ReactRouter, RootRoute, Route, RouterProvider } from '@tanstack/react-router'

import App from './pages/_app'
import NoMatch from './pages/404'

const root = new RootRoute({ component: App || Outlet })
const _404 = new Route({ getParentRoute: () => root, path: '*', component: NoMatch || Fragment })
const app = new Route({ getParentRoute: () => root, path: 'app', component: lazy(() => import('./pages/app')) })
const app2 = new Route({ getParentRoute: () => root, path: 'app2', component: lazy(() => import('./pages/app2')) })
const index = new Route({ getParentRoute: () => root, path: '/', component: lazy(() => import('./pages/index')) })





const config = root.addChildren([
  app,app2,index,
  _404,
])

const router = new ReactRouter({ routeTree: config })
export const Routes = () => <RouterProvider router={router} />

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}



