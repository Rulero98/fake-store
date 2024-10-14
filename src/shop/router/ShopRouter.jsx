import { createBrowserRouter, Navigate, Outlet, useLocation } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { HomeShopPage } from "../view/HomeShopPage";
import { UserPage } from "../view/UserPage";

export const ShopRouter = () => {

  const location = useLocation()

  return (
    <>
      <NavBar />
      {
        (location.pathname === '/')
          ? <HomeShopPage />
          : <Outlet />
      }

    </>
  )
}

export const routerShop = createBrowserRouter([
  {
    path: '/',
    element: <ShopRouter />,
    children: [
      {
        path: 'user',
        element: <UserPage />
      }
    ]
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />
  },
])