import { registerUserWithEmailPassword, SignInWithGoogle } from "../fireStore/providers"
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
    console.log(email, password, displayName)
    const result = await registerUserWithEmailPassword({displayName, email, password})

    console.log(result)

  }
}