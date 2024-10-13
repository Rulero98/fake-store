import { createBrowserRouter, Navigate, Outlet, useLocation } from "react-router-dom"
import { LoginPage, RegisterPage } from '../view'
import { WelcomePage } from "../view/WelcomePage"


export const AuthRouter = () => {

  const location = useLocation()


  return (

    (location.pathname === '/')
      ? <WelcomePage />
      : <Outlet />
  )
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AuthRouter />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ]
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />
  }

])
