import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { HomeShopPage } from "../view/HomeShopPage";
import { UserPage } from "../view/UserPage";

export const RouterStore = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export const routerStore = createBrowserRouter([
  {
    path: '/',
    element: <RouterStore />,
    children: [
      {
        path: 'home',
        element: <HomeShopPage />
      },
      {
        path: 'user',
        element: <UserPage />
      }
    ]
  },
  {
    path: '/*',
    element: <Navigate to={'/home'} />
  },
])