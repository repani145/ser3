import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';
import './Payment.css';
import { useLocation } from 'react-router-dom';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location=useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [amount, setAmount] = useState(''); // Add amount state

  useEffect(() => {
    if (!location.state?.totalAmount) {
      setErrorMessage('No amount specified for payment.');
    }
  }, [location]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      // Call the backend to create a PaymentIntent
      const response = await fetch(`https://react-project-three-beta.vercel.app/api/payments/create-payment-intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: parseInt(amount) * 100 }), // Send amount in cents
      });
      console.log('Response:', response); 

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { clientSecret } = await response.json();

      // Confirm Card Payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });

      if (result.error) {
        setErrorMessage(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          setSuccessMessage('Payment successful!');
          window.location.href = "/success";
        }
      }
    } catch (error) {
      setErrorMessage(`An error occurred: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-form">
      <h2>Complete Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <CardNumberElement id="cardNumber" className="StripeElement" />
        </div>
        <div className="form-group">
          <label htmlFor="cardExpiry">Expiration Date</label>
          <CardExpiryElement id="cardExpiry" className="StripeElement" />
        </div>
        <div className="form-group">
          <label htmlFor="cardCvc">CVC</label>
          <CardCvcElement id="cardCvc" className="StripeElement" />
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <button type="submit" className="payment-button" disabled={!stripe || isLoading}>
          {isLoading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
