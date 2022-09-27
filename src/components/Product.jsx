import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = (props) => {
  const {id, name, image,rating, numReviews } = props.product;
  return (
    <Card className="product-card">
      <p>{props.id}</p>
      <Link to={`/product/${id}`}>
      <Card.Img variant="top" src={image} alt={name} />
      </Link>
      
      <Card.Body>
        <Card.Title>
          <Link to={`/product/${id}`}>{name}</Link>
        </Card.Title>
        <Card.Text>
          <Rating
            rating={rating}
            text={` From ${numReviews} users`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
