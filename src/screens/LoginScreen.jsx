import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = ()=>{
    console.log(email);
    console.log(password);

  }

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch login
  };
  return (
    <FormContainer title="Sign In">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="d-grid">
          <Button type="submit" className="mt-3" variant="dark" onClick={login}>
            Sign In
          </Button>
        </div>
      </Form>
      <Row className="py-3">
        <Col>
          Not have an account? <Link to={`/register`} className="text-dark">Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
