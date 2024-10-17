import { RouterProvider } from "react-router-dom"
import { routerShop } from "./shop"
import { appRouter } from "./auth"

export const FakeStore = () => {
  return (
    <>
        {/* <RouterProvider router={routerShop} /> */}
        <RouterProvider router={appRouter} />
    </>
  )
}
