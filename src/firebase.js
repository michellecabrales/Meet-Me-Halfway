//Used https://www.section.io/engineering-education/registration-form-react.js-firebase/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
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
  appId: "1:864851409278:web:833ceedeeb224db1c59b2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const auth = app.auth()
export const auth = getAuth(app);
export const database = getDatabase(app);
const provider = new GoogleAuthProvider();

const onUserCredential = (userCredential) => {
  let user = {
    username: userCredential.user.displayName,
    email: userCredential.user.email,
    // uid: result.user.uid,
  };

  localStorage.setItem("user_info", JSON.stringify(user));
  return user;
};
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then(onUserCredential)
    .catch((error) => {
      console.log(error);
    });
};
export const logOut = () => {
  return auth
    .signOut()
    .then(() => {
      localStorage.removeItem("user_info");

      return;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const getUserFromStorage = () => {
  /**@type UserInfo */
  let user = localStorage.getItem("user_info") ?? "null";
  return JSON.parse(user);
};

export const signInWithEmailAndPassword_ = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then(onUserCredential)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

export const signupWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then(onUserCredential)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
