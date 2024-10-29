import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { startRegisterWithEmailAndPassword } from "../../store/thunksAuth"

const formData = {
  displayName: '',
  email: '',
  password: ''
}

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const { dataShop } = useSelector(state => state.shop)

  const { displayName, email, password, onInputChange } = useForm(formData)

  const onCreateUser = (e) => {
    e.preventDefault()
     console.log(email,password,displayName)
    dispatch(startRegisterWithEmailAndPassword({email,password,displayName}))
  }

  return (
    <div className="lp__container d-flex justify-content-between w-75 m-auto align-items-center">

      <form className="lp__containterLogin w-50 d-flex flex-wrap justify-content-center"
        onSubmit={onCreateUser}
      >


        <h1 className="w-100 text-center">Create your Account</h1>

        <div className="lp__input">
          <label >Full name</label>
          <input
            name="displayName"
            placeholder="Full name"
            type='text'
            value={displayName}
            onChange={onInputChange}
          />
        </div>

        <div className="lp__input">
          <label >Email</label>
          <input
            name="email"
            placeholder="Email"
            value={email}
            onChange={onInputChange}
          />
        </div>

        <div className="lp__input">
          <label >Password</label>
          <input
            name="password"
            placeholder="Paswword"
            type="password"
            value={password}
            onChange={onInputChange}
          />
        </div>

        <div className="lp__input">
          <label >Confirm rassword</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        <button className="lp__btn btn btn-primary mt-4">Register</button>

        <p className="w-50 mt-3">Already have an account? <Link to={'/login'} >Click here</Link>
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
  )
}
