import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Login from "../screens/LoginScreen"
import Shipping from "../screens/ShippingScreen"
import Paymment from "../screens/PaymentScreen"
import Checkout from './CheckoutScreen';

function PlaceOrderScreen() {

  return (
    <>
     
      <Tabs
      defaultActiveKey="login"
      id="PlaceOrderScreen"
      fill
    >
      <Tab eventKey="login" title="Login">
     
        <Login />
      </Tab>
      <Tab eventKey="shipping" title="Shipping">
        <Shipping />
      </Tab>
      <Tab eventKey="payment" title="Payment">
        <Paymment />
      </Tab>
      <Tab eventKey="checkout" title="CheckOut">
        <Checkout />
      </Tab>
    </Tabs>
    </>
    
  );
}


export default PlaceOrderScreen