import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Image,
  Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { cartActions } from "../Store/ShopingCart/CartSlice";
import { Link, useNavigate } from "react-router-dom";

const CartScreen = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const checkoutHandler = () => {
    navigate("/placeorder");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col md={8}>
            {cartItems.length === 0 ? (
              <h5>
                Your cart is empty <Link to="/" className="text-dark">Go Back</Link>
              </h5>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <Tr item={item} key={item.id} />
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{`Subtotal ${totalAmount}`}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      disabled={cartItems.length === 0}
                      onClick={checkoutHandler}
                      variant="dark"
                    >
                      Proceed To Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Tr = (props) => {
  const { id, image, name, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <Row>
      <Col md={2} className="mb-2">
        <Image src={image} alt={name} fluid rounded />
      </Col>
      <Col md={3} className="text-center">
        <Link to="/product/:id" class="text-dark">{name}</Link>
      </Col>
      <Col md={2} className="text-center">
        Rs {price}
      </Col>
      <Col md={2}>
        <Form.Control
          // as="select"
          value={quantity}
          // onChange={(e) => addItems(e, item)}
        ></Form.Control>
      </Col>
      <Col md={2}>
        <Button type="button" variant="light" onClick={deleteItem}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Col>
    </Row>
  );
};

export default CartScreen;
