import { logOut } from "../../../firebase";
import { auth } from "../../../firebase";
import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { Container, Stack, TextField } from "@mui/material";
import { AppContext } from "../../../AppContext";
import { useNavigate } from "react-router";
//import "bootstrap/dist/css/bootstrap.min.css"

/**
 *
 * @typedef {{email:string, username:string, uid: string}} UserInfo
 */
function Login({ user, loginfn }) {
  let { signInWithGoogle, signInWithEmailAndPassword } = useContext(AppContext);

  let [/**@type UserInfo*/ user_local, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => setUser(user), [user]);

  // let signIn = () => loginfn();

  let handleSubmit = (event) => {
    event.preventDefault();
    let { password } = event.target.elements;

    signInWithEmailAndPassword(event.target.elements.email.value, password.value).then((user) => navigate("/"));
  };

  const handleSignInWithGoogle = () => signInWithGoogle().then((user) => navigate("/"));

  return (
    <>
      <Container sx={{ "margin-top": "2rem" }}>
        <div className="page-login">
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              {/* <TextField required id="outlined-required" label="username" name="username" max-length="255" /> */}
              <TextField required id="outlined-required" label="email" name="email" type="email" max-length="255" />
              <TextField
                required
                id="outlined-required"
                label="password"
                name="password"
                type="password"
                min-length="6"
                max-length="255"
              />
              {/* <TextField
                required
                id="outlined-required"
                label="password_confirm"
                name="password_confirm"
                type="password"
                min-length="6"
                max-length="255"
              /> */}

              <Button variant="contained" type="submit">
                Sign in
              </Button>
            </Stack>

            <Button variant="text" onClick={handleSignInWithGoogle} xs={{ "margin-top": "2rem" }}>
              {" "}
              Sign In With Google
            </Button>
          </form>
          <h1>{user?.username}</h1>
          <h1>{user?.email}</h1>
        </div>
      </Container>
    </>
  );
}
export default Login;
