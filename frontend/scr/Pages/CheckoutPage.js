import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../actions/orderActions';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './CheckoutPage.css'; // Assuming you have a CSS file for styling

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Stripe');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !address || !city || !postalCode || !country) {
      setError('Please fill in all shipping details.');
      return;
    }

    dispatch(createOrder({
      orderItems: cartItems,
      shippingAddress: { name, address, city, postalCode, country },
      paymentMethod,
    }))
    .then(() => {
      history.push('/order-summary');
    })
    .catch((err) => {
      setError('Failed to create order. Please try again.');
    });
  };

  return (
    <div>
      <Header />
      <main className="checkout-page">
        <h1>Checkout</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={submitHandler} className="checkout-form">
          <div className="shipping-info">
            <h2>Shipping Information</h2>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <label htmlFor="postalCode">Postal Code</label>
            <input
              id="postalCode"
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="payment-method">
            <h2>Payment Method</h2>
            <div>
              <input
                type="radio"
                id="stripe"
                value="Stripe"
                name="paymentMethod"
                checked={paymentMethod === 'Stripe'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="stripe">Stripe</label>
            </div>
            <div>
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                checked={paymentMethod === 'PayPal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
            <div>
              <input
                type="radio"
                id="airtel"
                value="Airtel"
                name="paymentMethod"
                checked={paymentMethod === 'Airtel'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="airtel">Airtel Money</label>
            </div>
          </div>
          <button type="submit" className="place-order-button">Place Order</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;

