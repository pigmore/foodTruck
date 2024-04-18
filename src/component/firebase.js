import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc,getDocs,query, orderBy, startAt,endAt,limit,writeBatch,doc,where } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBPdrlaHEUypbmCH75-eyNPbRwsD-HNJM4",
  authDomain: "foodtruck-84ff0.firebaseapp.com",
  projectId: "foodtruck-84ff0",
  storageBucket: "foodtruck-84ff0.appspot.com",
  messagingSenderId: "766313935152",
  appId: "1:766313935152:web:652618a6e0cf646a7658f5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
