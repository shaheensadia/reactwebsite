import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsData from "../Assets/DummyData/DummyProducts";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Badge,
  Button,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { cartActions } from "../Store/ShopingCart/CartSlice";

const ProductScreen = () => {
  const[qty, setQty] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = ProductsData.find((product) => product.id === id);

  const [preViewImage, setPreViewImage] = useState(product.image);
  const {
    name,
    price,
    image,
    rating,
    numReviews,
    category,
    fabric,
    color,
    countInStock,
    description,
  } = product;

  useEffect(() => {
    setPreViewImage(product.image);
  }, [product]);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        image,
      })
    );
  };

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <Row className="mb-3">
        <Col>
          <Button variant="dark" onClick={backHandler}>Back</Button>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <Image src={preViewImage} fluid alt={name} />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating rating={rating} text={` from ${numReviews} users`} />
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>{category}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>{fabric}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4 className="text-capitalize">Available in {color}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>
                  <h4>Price</h4>
                </Col>
                <Col>
                  <h4>Rs {price}/-</h4>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h4>Stock</h4>
                </Col>
                <Col>
                  {product.countInStock > 0 ? (
                    <Badge bg="success">Available</Badge>
                  ) : (
                    <Badge bg="danger">Out of stock</Badge>
                  )}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h4>Quantity</h4>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Select disabled={countInStock === 0} 
                    value={qty} 
                    onChange={(e) => setQty(e.target.value)}>
                      {[...Array(countInStock).keys()].map(
                        (value) =>
                          value < 5 && (
                            <option key={value} value={value + 1}>
                              {value + 1}
                            </option>
                          )
                      )}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid">
                <Button onClick={addItem} disabled={countInStock === 0} variant="dark">
                  Add to Cart
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
