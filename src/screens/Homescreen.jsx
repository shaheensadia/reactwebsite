import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import Product from "../components/Product";
import ProductsData from "../Assets/DummyData/DummyProducts";

const Homescreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(!isLoading);
    }, 500);
  },[]);

  return (
    <>
      {isLoading ? (
        <Row>
          {ProductsData.map((product) => (
            <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
              <Product product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

export default Homescreen;
