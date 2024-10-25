import { SignInWithGoogle } from "../fireStore/providers"
import { login, checkingStatus } from "./authSlice"


export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingStatus())

    const result = await SignInWithGoogle()

    if(!result.ok) alert('No se pudo iniciar sesión') 

    dispatch(login(result))
  }
}