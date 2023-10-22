import {createBrowserRouter} from 'react-router-dom'
import {RedirectToWelcome1} from '../components/RedirectToWelcome1.tsx'
import {MainLayout} from '../layouts/MainLayout.tsx';
// @ts-ignore
import {welcomeRoutes} from './welcomeRoutes.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RedirectToWelcome1 />,
    children: [
      welcomeRoutes
    ],
  }
])

