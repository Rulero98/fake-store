import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"

export const RegisterPage = () => {

  const { dataShop } = useSelector(state => state.shop)

  const name = useForm({ type: 'text' })
  const password = useForm({ type: 'password' })

  const onCreateUser = (e) => {
    e.preventDefault()
    console.log(name)
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
            type="text"
            name="name"
            placeholder="Full name"
            {...name}
          />
        </div>
        <div className="lp__input">
          <label >Username</label>
          <input
            type="text"
          />
        </div>
        <div className="lp__input">
          <label >Email</label>
          <input
            type="email"
          />
        </div>

        <div className="lp__input">
          <label >Password</label>
          <input
            name="password"
            placeholder="Password"
            {...password}
          />
        </div>
        <div className="lp__input">
          <label >Confirm rassword</label>
          <input
            type="password"
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
