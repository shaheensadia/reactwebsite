import React from 'react'
import { Container} from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Footer from './components/Footer'
import Header from './components/Header'
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import Homescreen from './screens/Homescreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen'
import RegisterScreen from './screens/RegisterScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='main-view py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Homescreen />}/>
            <Route path='/login' element={<LoginScreen />}/>
            <Route path='/register' element={<RegisterScreen />}/>
            <Route path='/checkout' element={<CheckoutScreen />}/>
            <Route path='/placeorder' element={<PlaceOrderScreen />}/>
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/cart' element={<CartScreen />}/>
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
