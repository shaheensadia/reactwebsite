import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const submitHandler = (e) => {
    const value = e.target.name;
    console.log(value);
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password not match");
    } else {
      setMessage(null);
      // Dispatch register
    }
  };
  return (
    <FormContainer title="Register">
    {message ? message : null}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-2">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
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
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value !== confirmPassword) {
                setMessage("Password not match");
              } else {
                setMessage(null);
              }
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter confirm password"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (e.target.value !== password) {
                setMessage("Password not match");
              } else {
                setMessage(null);
              }
            }}
          ></Form.Control>
        </Form.Group>
        <div className="d-grid">
          <Button type="submit" className="mt-3" variant="dark">
            Register
          </Button>
        </div>
      </Form>
      <Row className="py-3">
        <Col>
          Already have an account? <Link to={`/login`} class="text-dark">Sign In</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
