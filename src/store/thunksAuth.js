import { loginUserWithEmailPassword, registerUserWithEmailPassword, SignInWithGoogle } from "../fireStore/providers"
import { login, checkingStatus } from "./authSlice"


export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingStatus())

    const result = await SignInWithGoogle()

    if (!result.ok) alert('No se pudo iniciar sesión')

    dispatch(login(result))
  }
}


export const startRegisterWithEmailAndPassword = ({ email, password, displayName }) => {

  return async (dispatch) => {

    dispatch(checkingStatus())
    const result = await registerUserWithEmailPassword({ displayName, email, password })

    dispatch(login(result))

  }
}

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingStatus())
    const result = await loginUserWithEmailPassword({ email, password })
    console.log(result)
    dispatch(login(result))

  }
}