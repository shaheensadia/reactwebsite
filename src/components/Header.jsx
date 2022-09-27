import React from "react";

import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from 'react-router-bootstrap';

import { useSelector} from "react-redux";

// import "./Header.css"

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
 


  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <LinkContainer to="/">
        <Navbar.Brand>Fashion</Navbar.Brand>
        </LinkContainer>
          

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <LinkContainer to='/cart'>
            <Nav.Link >
                <FontAwesomeIcon icon={faShoppingCart} />
                &nbsp;Cart <Badge bg="secondary">{totalQuantity }</Badge>
              </Nav.Link>
            </LinkContainer>
              <LinkContainer to='/login'>
              <Nav.Link>
                <FontAwesomeIcon icon={faUser} />
                &nbsp;Login
              </Nav.Link>
              </LinkContainer> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
