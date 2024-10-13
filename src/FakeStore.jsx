import { RouterProvider } from "react-router-dom"
import { routerStore } from "./shop"

export const FakeStore = () => {
  return (
    <>

      <RouterProvider router={routerStore} />


    </>
  )
}
