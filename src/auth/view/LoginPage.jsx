import { useDispatch, useSelector } from "react-redux"

import './index.css'
import { ImGoogle } from "react-icons/im"
import { Link } from "react-router-dom"
import { startGoogleSignIn, startLoginWithEmailAndPassword } from "../../store/thunksAuth"
import { useForm } from "../../hooks/useForm"

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { dataShop } = useSelector(state => state.shop)

  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm(formData)
  const onLoginWithGoogle = (e) => {
    e.preventDefault()
    dispatch(startGoogleSignIn())
  }

  const onLoginWithEmailPassword = (e) => {
    e.preventDefault()
    dispatch(startLoginWithEmailAndPassword({email,password}))
  }

  return (
    <>
      <div className="lp__container d-flex justify-content-between w-75 m-auto align-items-center">

        <form
          className="lp__containterLogin w-50 d-flex flex-wrap justify-content-center"
          onSubmit={onLoginWithEmailPassword}
        >

          <h1 className="w-100 text-center">Welcome to the <br /> FakeStore</h1>

          <div className="lp__input">
            <label className=" ">Email</label>
            <input
              placeholder="Email"
              type="text"
              name={'email'}
              value={email}
              onChange={onInputChange}
            />
          </div>


          <div className="lp__input">
            <label className="">Password</label>
            <input
              placeholder="Password"
              type="password"
              name={'password'}
              value={password}
              onChange={onInputChange}
            />
          </div>


          <p className="w-50 d-block">Forgot password?</p>

          <button className="lp__btn btn btn-primary">Sign in</button>

          <button
            className="lp__btn btn btn-secondary"
            onClick={onLoginWithGoogle}
          > <ImGoogle /> Sign with Google</button>

          <p className="w-50 mt-3">Don&apos;t have an account? <Link to={'/register'} >Click here</Link>
          </p>
        </form>

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
