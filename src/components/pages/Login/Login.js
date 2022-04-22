//import '../../../App';
//import "./LoginIndex.css"
import { signInWithGoogle } from "../../../firebase";
import { logOut } from "../../../firebase";
import { auth } from "../../../firebase";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css"

/**
 *
 * @typedef {{email:string, username:string, uid: string}} UserInfo
 */
function Login({ user, loginfn }) {
  let [/**@type UserInfo*/ user_local, setUser] = useState(null);

  useEffect(() => setUser(user), [user]);

  let signIn = () => loginfn();

  return (
    <div>
      <Button variant="contained" onClick={signIn}>
        {" "}
        Sign In With Google
      </Button>
      <h1>{user?.username}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
}
export default Login;
