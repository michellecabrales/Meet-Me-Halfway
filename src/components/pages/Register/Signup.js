import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import "./Signup.css";
import { AppContext } from "../../../AppContext";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Signup() {
  const themebtn = createTheme({
    palette: {
      primary: {
        main: "#15cdfc",
      },
    },
  });
  let { signUpWithEmailAndPassword } = useContext(AppContext);

  let defaultData = {
    email: "",
    password: "",
    password_confirm: "",
  };

  //auto fill with fake info
  // defaultData = { email: `fake_math${Math.floor(Math.random()*400)}@domain.com`, password: "password", password_confirm: "password" }

  const [state, setState] = useState(defaultData);
  const navigate = useNavigate()

  let onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let onSignupClick = (event) => {
    event.preventDefault();

    const { email, password, password_confirm } = state;

    if (password !== password_confirm) {
      throw alert("check password");
    }
    console.log("Sign up " + email + " " + password);

    signUpWithEmailAndPassword(email, password).then((user)=> navigate('/'),(err)=>alert(err));
  };

  return (
    <Container>
      <Row>
        <Col md="4">
          <h1>Sign up</h1>
          <Form onSubmit={onSignupClick}>
            <div className="credientials-group">
              <Form.Group controlId="email">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  value={state.email}
                  required
                  onChange={onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>
            </div>
            <div className="credientials-group">
              <Form.Group controlId="passwordId">
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={state.password}
                  onChange={onChange}
                  required
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="passwordId">
                <Form.Label>Password confirm: </Form.Label>
                <Form.Control
                  type="password"
                  name="password_confirm"
                  placeholder="Enter password"
                  value={state.password_confirm}
                  onChange={onChange}
                  required
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </div>
            <ThemeProvider theme={themebtn}>
              <Button type="submit" className="btn" style={{ height: "30px" }} variant="contained">
                Sign up
              </Button>
            </ThemeProvider>
          </Form>

          <p className="mt-2">
            Already have account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
