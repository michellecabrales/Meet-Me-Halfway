import { createContext } from "react";

export const AppContext = createContext({
  user: null,
  siginWithGoogle: () => {},
  signInWithEmailAndPassword: (/**@type String*/ email, /**@type String*/ password) => {},
  signUpWithEmailAndPassword: (/**@type String*/ email, /**@type String*/ password) => {},
  logout: () => {},
});
