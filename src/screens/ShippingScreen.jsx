import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ShippingScreen = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <h2 className="mb-4">Shipping Address</h2>
            <Form className="checkout__form" onSubmit={submitHandler}>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setEnterName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEnterEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  type="number"
                  placeholder="Phone number"
                  required
                  onChange={(e) => setEnterNumber(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Country"
                  required
                  onChange={(e) => setEnterCountry(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="City"
                  required
                  onChange={(e) => setEnterCity(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Control
                  type="number"
                  placeholder="Postal code"
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" className="addTOCart__btn" variant="dark">
                Payment
              </Button>
            </Form>
          </Col>
          <Col lg="2" ></Col>

          <Col lg="4" md="6">
            <div className="checkout__bill bg-info opacity-75 p-5 mt-5">
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Subtotal: <span>${cartTotalAmount}</span>
              </h6>
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Shipping: <span>${shippingCost}</span>
              </h6>
              <div className="checkout__total pt-4 " style={{borderTop: "1px solid #ddd"}}>
                <h5 className="d-flex align-items-center justify-content-between">
                  Total: <span>${totalAmount}</span>
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShippingScreen;
