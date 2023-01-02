// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeyk--GTNOCmwqoOfggL-BLOkb7UMGQsU",
  authDomain: "law-market.firebaseapp.com",
  projectId: "law-market",
  storageBucket: "law-market.appspot.com",
  messagingSenderId: "397011451206",
  appId: "1:397011451206:web:b5e803307d47080621b947",
  measurementId: "G-HCF3DFTQ6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;