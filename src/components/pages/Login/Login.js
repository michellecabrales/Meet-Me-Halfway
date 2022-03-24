/*import React from 'react'

export default function Login() {
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Login</h1>
        </div>
    )
}
*/
/*https://www.youtube.com/watch?v=91qEdc6dSUs&ab_channel=TylerPotts*/
import React, {useState} from 'react';
import LoginForm from './LoginForm';
import './LoginIndex.css'
function LoginThing(){
  const adminUser = {
    email: "test@gmail.com",
    password: "1234"
  }

  const [user, setUser] = useState ({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
  }
    else {
      console.log("Details do not match");
      setError("Login Failed")
    }
  }

    const Logout = () => {
      setUser({name: "", email: ""});
    }

    return (
      <div className = "LoginThing">
        {(user.email !="") ? (
            <div className="welcome">
              <h2>Welcome, <span>{user.name}</span></h2>
              <button onClick={Logout}>Logout</button>
              </div>
        ) : (
          <LoginForm Login={Login} error={error}/>
        )}
      </div>
    )


}

export default LoginThing;