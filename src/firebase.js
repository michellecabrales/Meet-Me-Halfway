//Used https://www.section.io/engineering-education/registration-form-react.js-firebase/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Izop7mxgSPW71u5NIOlso_GO8-X5ado",
  authDomain: "registration-form-5914e.firebaseapp.com",
  databaseURL: "https://registration-form-5914e-default-rtdb.firebaseio.com",
  projectId: "registration-form-5914e",
  storageBucket: "registration-form-5914e.appspot.com",
  messagingSenderId: "864851409278",
  appId: "1:864851409278:web:833ceedeeb224db1c59b2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
