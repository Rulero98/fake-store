import { useSelector } from "react-redux"

import './LoginPage.css'

export const LoginPage = () => {

  const { dataShop } = useSelector(state => state.shop)

  return (
    <>
      <div className="lp__container d-flex justify-content-between w-75 m-auto align-items-center">

        <div className="w-25">
          <div >
            <h1>Welcome to the FakeStore</h1>
            <div className="d-flex flex-wrap">

              <label className="w-100">Email</label>
              <input className="w-100" />
            </div>
            <div className="d-flex flex-wrap">

              <label className="w-100">Password</label>
              <input className="w-100" />
            </div>

          </div>
          <p>
            Forgot password?
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <button className="w-100">Sign in</button>
            <button className="w-100">Sign with Google</button>
          </div>
          <div>
            <p>Don&apos;t have an account?</p>
            <button className="btn btn-outline-primary">Sign Up</button>
          </div>
        </div>
        <div className="d-flex justify-content-end lp__containterImg" >
          {
            (!dataShop)
              ? 'Loading...'
              : <img
                src={dataShop[0].image}
                alt="Loading..."
                className="lp__img"
              />
          }
        </div>

      </div>

    </>
  )
}
