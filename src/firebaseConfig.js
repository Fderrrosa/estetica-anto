import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDMkI9osv2msvyiLBzfjhidu2Bgc5Ur0OA",
  authDomain: "derosa-react.firebaseapp.com",
  projectId: "derosa-react",
  storageBucket: "derosa-react.appspot.com",
  messagingSenderId: "664789371311",
  appId: "1:664789371311:web:12d942c02031ed2605c75a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);