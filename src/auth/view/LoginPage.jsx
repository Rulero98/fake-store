import { useSelector } from "react-redux"

import './index.css'
import { ImGoogle } from "react-icons/im"
import { Link } from "react-router-dom"

export const LoginPage = () => {

  const { dataShop } = useSelector(state => state.shop)

  return (
    <>
      <div className="lp__container d-flex justify-content-between w-75 m-auto align-items-center">

        <div className="lp__containterLogin w-50 d-flex flex-wrap justify-content-center">


          <h1 className="w-100 text-center">Welcome to the <br/> FakeStore</h1>


          <div className="lp__input">
            <label className=" ">Email</label>
            <input className=" " />
          </div>


          <div className="lp__input">
            <label className="">Password</label>
            <input className="" />
          </div>


          <p className="w-50 d-block">Forgot password?</p>

          <button className="lp__btn btn btn-primary">Sign in</button>
          <button className="lp__btn btn btn-secondary"> <ImGoogle /> Sign with Google</button>

          <p className="w-50 mt-3">Don&apos;t have an account? <Link to={'/register'} >Click here</Link>
          </p>
        </div>

        <div className="d-flex justify-content-end lp__containterImg" >
          {
            (!dataShop)
              ? 'Loading...'
              : <img
                src={
                  (dataShop[0]?.image)
                    ? dataShop[0].image
                    : 'Loading'
                }
                alt="Loading..."
                className="lp__img"
              />
          }
        </div>

      </div>

    </>
  )
}
