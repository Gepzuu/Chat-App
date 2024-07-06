import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "community-43ca6.firebaseapp.com",
  databaseURL: "https://community-43ca6-default-rtdb.firebaseio.com",
  projectId: "community-43ca6",
  storageBucket: "community-43ca6.appspot.com",
  messagingSenderId: "210192985666",
  appId: "1:210192985666:web:69b180008719ef4f3207db"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()