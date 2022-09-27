import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


import FormContainer from '../components/FormContainer';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PaymentScreen = () => {
    const [payment, setPayment] = useState("");
    const navigation = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
     };

     const SubmitHandler = () => {
        navigation("/checkout")
     }
  return (
    <FormContainer title='Payment Type'>
        <Form onSubmit={handleSubmit}>
          <Form.Check type='radio' id='stripe'>
            <Form.Check.Input
              type='radio'
              name='paymentType'
              value='Stripe'
              checked={payment === 'Stripe'}
              onChange={(e) => setPayment(e.target.value)}
            />
            <Form.Check.Label>Stripe</Form.Check.Label>
          </Form.Check>
          <Form.Check type='radio' id='paypal'>
            <Form.Check.Input type='radio' name='paymentType' />
            <Form.Check.Label>Paypal</Form.Check.Label>
          </Form.Check>

          <Button type='submit' variant='dark' className='float-end'onClick={SubmitHandler }>
            Continue <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </Form>
      </FormContainer>
  )
}

export default PaymentScreen