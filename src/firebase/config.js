// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw3xzgeFdS7gsRbEZNu_bZgraf4a54tAs",
  authDomain: "asterix-fd960.firebaseapp.com",
  projectId: "asterix-fd960",
  storageBucket: "asterix-fd960.appspot.com",
  messagingSenderId: "1042036548913",
  appId: "1:1042036548913:web:311b878cd84383c5a77c10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);