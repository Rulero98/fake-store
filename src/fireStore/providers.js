import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./firebaseConfig";


const provider = new GoogleAuthProvider();

export const SignInWithGoogle = async () => {

  try {

    const result = await signInWithPopup(FirebaseAuth, provider)

    const { displayName, email, photoURL, uid, } = result.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }
  }
  catch (error) {
    const errorCode = error.code
    const errorMessage = error.errorMessage
    const email = error.customData.email
    const credential = GoogleAuthProvider.credentialFromError(error)

    return {
      ok: false,
      errorCode,
      errorMessage,
      email,
      credential
    }
  }

}

export const registerUserWithEmailPassword = async ({ displayName, email, password }) => {
  try {

    const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password)

    const { uid, photoURL } = res.user

    await updateProfile(FirebaseAuth.currentUser, { displayName })

    return {
      ok: true,
      displayName,
      email,
      uid,
      photoURL
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const loginUserWithEmailPassword = async ({ email, password }) => {
  try {

    const res = await signInWithEmailAndPassword(FirebaseAuth, email, password)

    const { uid, photoURL, displayName } = res.user

    console.log(res)
    return {
      ok: true,
      displayName,
      email,
      uid,
      photoURL
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}