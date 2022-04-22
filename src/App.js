import React, { useState } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import background from "./images/drive.png";
import { Signup } from "./components/pages/Register/Signup";
import { getUserFromStorage, logOut, signInWithGoogle } from "./firebase";
import { useNavigate } from "react-router";

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

  let login = () => {
    signInWithGoogle().then((user) => {
      setUser(user);
    });
  };
  return (
    <div className="App">
      <NavBar
        loginfn={() => login(user)}
        logoutfn={() => logout(user)}
        user={user}
      />
    </div>
  );
}
export default App;
