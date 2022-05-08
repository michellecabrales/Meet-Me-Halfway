import { createContext } from "react";



/**@typedef {{email}} User */



/**@return {Promise<User>} */
function signInWithGoogle () {}


/**@return {Promise<User>} */
function signInWithEmailAndPassword (/**@type String*/ email, /**@type String*/ password) {}


/**@return {Promise<User>} */
function signUpWithEmailAndPassword (/**@type String*/ email, /**@type String*/ password) {
  
}


/**@return Promise<any> */
function logout(){}

export const AppContext = createContext({
  user: null,
  signInWithGoogle,
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  logout
});
