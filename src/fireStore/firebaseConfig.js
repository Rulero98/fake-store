// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const fb_ApiKey = import.meta.env.VITE_APP_FIREBASE_API_KEY;
const fb_authDomain= import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN
const fb_projectId= import.meta.env.VITE_APP_FIREBASE_PROJECT_ID
const fb_storageBucket= import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET
const fb_messagingSenderId= import.meta.env.VITE_APP_FIREBASE_MESSAGE_SENDER_ID
const fb_appId= import.meta.env.VITE_APP_FIREBASE_APP_ID

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: fb_ApiKey,
  authDomain: fb_authDomain,
  projectId: fb_projectId,
  storageBucket: fb_storageBucket,
  messagingSenderId: fb_messagingSenderId,
  appId: fb_appId
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

//get Auth with fireBase Configuration
export const FirebaseAuth = getAuth(FirebaseApp)

//stablish conection with DB with firebase configuration
export const FirebaseDB = getFirestore(FirebaseApp)

