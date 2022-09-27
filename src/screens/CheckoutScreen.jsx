import React from "react";
import { useSelector} from "react-redux";
import {
  Card,
  Row,
  Col,
  ListGroupItem,
  Button,
  ListGroup,
  Image,
  Container,
} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

const CheckoutScreen = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const ShippingCost = 100;
  const taxAmount = 0.16;
  const TaxAmount = (totalAmount * Number(taxAmount))/100; 

  const Total = TaxAmount + totalAmount + Number(ShippingCost);

  const checkoutHandler = () => {
    navigate("/");
  };
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <h4>Name : Test</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                Email :&nbsp;
                <Link to="/" className="text-dark">Test@test.com</Link>
              </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>ADDRESS : SADUA234, ISLBAD, 54000, PAKISTAN</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Payment Type :&nbsp; Stripe</h4>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{`Subtotal ${totalAmount}`}</h2>
              </ListGroup.Item>
              <ListGroupItem>
              <Row>
                <Col>
                <h4 >Shipping</h4>
                </Col>
                <Col>
                    100
                </Col>
              </Row>
               
              </ListGroupItem>
              <ListGroupItem>
              <Row>
                <Col>
                <h4>
               tax <span className='fw-light fs-6'>(16% GST)</span>
               </h4>
                </Col>
                <Col>
                    {TaxAmount}
                </Col>
              </Row>
               
              </ListGroupItem>
              <ListGroupItem>
              <Row>
                <Col>
                <h4>
               Total
               </h4>
                </Col>
                <Col>
                    Rs.{Total}
                </Col>
              </Row>
               
              </ListGroupItem>
              <ListGroup.Item>
                <div className="d-grid">
                  <Button  variant="dark" onClick={checkoutHandler}>
                   Place Order
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row>
          <ListGroup variant="flush">
            <ListGroupItem>
              <Row>
                <Col md={2}>Image</Col>
                <Col md={3}>Name</Col>
                <Col md={3}>Price</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col md={8}>
                  {cartItems.length === 0 ? (
                    <h5>
                      Your cart is empty <Link to="/">Go Back</Link>
                    </h5>
                  ) : (
                    <ListGroup variant="flush">
                      {cartItems.map((item) => (
                        <Tr item={item} key={item.id} />
                      ))}
                    </ListGroup>
                  )}
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
      </Row>
    </Container>
  );
};

const Tr = (props) => {
  const { image, name, price } = props.item;

  return (
    <Row>
    <Col md={2} className="mb-2" >
        <Image src={image} alt={name} fluid rounded />
      </Col>
      <Col md={6}>
        {name}
      </Col>
      <Col md={3} >
        Rs {price}
      </Col>

      
    </Row>
  );
};

export default CheckoutScreen;
