import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBIc8sAmvKVRCIn3YDHrI8Yr_aonG8OLUg",
  authDomain: "e-commerce-665ce.firebaseapp.com",
  projectId: "e-commerce-665ce",
  storageBucket: "e-commerce-665ce.firebasestorage.app",
  messagingSenderId: "33125709417",
  appId: "1:33125709417:web:bb3e544e7e743a84e994f8",
  measurementId: "G-GV53Q8WDXR",
  databaseURL: "https://e-commerce-665ce-default-rtdb.firebaseio.com/",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const database = getDatabase(app);
export const provider = new GoogleAuthProvider();
auth.languageCode = "en";
export { app };
