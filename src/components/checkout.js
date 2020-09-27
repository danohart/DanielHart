import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_API_KEY);
  }
  return stripePromise;
};

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async event => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: 'price_1HW5uw2RyYBIOmAGPkLorkvd', quantity: 1 }],
      successUrl: `http://localhost:8000/about/`,
      cancelUrl: `http://localhost:8000/`,
    });

    if (error) {
      console.warn('Error:', error);
      setLoading(false);
    }
  };

  return (
    <button disabled={loading} onClick={redirectToCheckout}>
      BUY MY BOOK
    </button>
  );
};

export default Checkout;
