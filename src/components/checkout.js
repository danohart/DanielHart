import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from 'react-bootstrap';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_API_KEY);
  }
  return stripePromise;
};

const Checkout = props => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async event => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: props.item, quantity: 1 }],
      successUrl: `http://localhost:8000/about`,
      cancelUrl: `http://localhost:8000/shop`,
    });

    if (error) {
      console.warn('Error:', error);
      setLoading(false);
    }
  };

  return (
    <Button disabled={loading} onClick={redirectToCheckout}>
      Buy Now
    </Button>
  );
};

export default Checkout;
