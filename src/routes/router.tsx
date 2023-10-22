import {createBrowserRouter} from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFoundPage.tsx';
import {MainLayout} from '../layouts/MainLayout.tsx';
// @ts-ignore
import {welcomeRoutes} from './welcomeRoutes.tsx'

export const router = createBrowserRouter([
  {
    path:'/home',
    element:<div>home</div>
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      welcomeRoutes
    ],
  }
])

