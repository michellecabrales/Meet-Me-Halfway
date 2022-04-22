import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSignupClick = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("Sign up " + userData.email + " " + userData.password);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Sign up</h1>
            <Form>
              <div className="credientials-group">
                <Form.Group controlId="email">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.onChange}
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
                    value={this.password}
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </div>
            </Form>
            <Link to="/Dashboard">
              <Button
                onClick={this.onSignupClick}
                type="submit"
                className="btn"
                style={{ height: "30px", width: "85px" }}
              >
                Sign up
              </Button>
            </Link>
            <p className="mt-2">
              Already have account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
