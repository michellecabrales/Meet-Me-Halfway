import React, { useState } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import background from "./images/drive.png";
import { Signup } from "./components/pages/Register/Signup";
import { getUserFromStorage, logOut, signInWithGoogle, signupWithEmailAndPassword ,signInWithEmailAndPassword_} from "./firebase";
import { useNavigate } from "react-router";
import { AppContext } from "./AppContext";

function App() {
  let [user, setUser] = useState(getUserFromStorage());

  let navigate = useNavigate();

  let logout = () => {
    logOut()
      .then(() => {
        //update the user after logout and nav to homepage
        setUser(getUserFromStorage());
        navigate("/");
      })
      .catch((error) => console.log("Error loging out", error));
  };

  let login = () =>
    signInWithGoogle().then((user) => {
      setUser(user);
    });

  const _signInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword_(email, password).then((user) => {
      setUser(user);
    });

  const _signUpWithEmailAndPassword = (email, password) =>
    signupWithEmailAndPassword(email, password).then((user) => {
      return setUser(user);
    }).catch(console.err);

  const value = {
    logout,
    signInWithGoogle: login,
    signInWithEmailAndPassword: _signInWithEmailAndPassword,
    signUpWithEmailAndPassword: _signUpWithEmailAndPassword,
  };

  return (
    <AppContext.Provider value={value}>
      <div className="App">
        <NavBar loginfn={() => login(user)} logoutfn={() => logout(user)} user={user} />
      </div>
    </AppContext.Provider>
  );
}
export default App;
