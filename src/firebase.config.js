import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAQLv-wTDb8HMBrsf_pwBh7zGlYysRQvgw",
  authDomain: "house-market-75fc4.firebaseapp.com",
  projectId: "house-market-75fc4",
  storageBucket: "house-market-75fc4.appspot.com",
  messagingSenderId: "259189151271",
  appId: "1:259189151271:web:203c9514d4378f29caa002",
  measurementId: "G-LBS88VTJTQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFireStore()