import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "./sub.css";
import axios from 'axios';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [CompanyName, setCompanylName] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(''); // State for product selection
  const stripe = useStripe();
  const elements = useElements();
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false); // State for loading


  // Define product price IDs
  const productPriceIds = {
    product1: 'price_1PzcgBP0ebickvSnmhn7bc5g',
    product2: 'price_1PzcjJP0ebickvSnyn03W4PW',
    product3: 'price_1PzclGP0ebickvSn0LwlyJ7A',
  };



  const handleSubmit = async (e) => {
  
    
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe.js hasn't loaded yet.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error('CardElement not found');
      return;
    }

    setLoading(true); // Start loading

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: { email },
    });

    if (error) {
      console.error('Error creating payment method:', error);
      setAlertMessage('Error creating payment method. Please try again.');
      setShowAlert(true);
      setLoading(false); // Stop loading
      return;
    }

    try {
      const { data } = await axios.post('/api/checkout', {
        email,
        paymentMethodId: paymentMethod.id,
        priceId: productPriceIds[selectedProduct],
      });

      // Log subscription data
      console.log('Subscription created successfully:', data);

      // Show success alert
      setAlertMessage('Congratulations! Your subscription was successful.');
      setShowAlert(true);
    } catch (err) {
      console.error('Error creating subscription:', err.response?.data?.error);
      setAlertMessage('Subscription failed. Please try again.');
      setShowAlert(true);
    } finally {
      setLoading(false);
      axios.post("/api/subscription",{
        email,
        fullName,
        CompanyName,
        paymentMethodId: paymentMethod.id,
        priceId: productPriceIds[selectedProduct],
      });
      
    }




    // Reset form fields
    setEmail('');
    setFullName('');
    setCompanylName('');
    setSelectedProduct('');
    elements.getElement(CardElement).clear();
  };
  

  return (

<div id='cbg' className="subscription-container">
  <h2 className="subscription-heading">Subscribe to Our Service</h2>
  <form onSubmit={handleSubmit} className="subscription-form">
    <div className="form-group">
      <label htmlFor="fullName" className="form-label">Full Name</label>
      <input
        type="text"
        id="fullName"
        placeholder="Enter your full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="form-input"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="CompanyName" className="form-label">Company Name</label>
      <input
        type="text"
        id="fullName"
        placeholder="Enter your company name"
        value={CompanyName}
        onChange={(e) => setCompanylName(e.target.value)}
        className="form-input"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="email" className="form-label">Email address</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="subscriptionPlan" className="form-label">Subscription Plan</label>
      <select
        id="subscriptionPlan"
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
        className="form-select"
        required
      >
        <option value="">Choose a plan...</option>
        <option value="product1">All Quran Course - $30/month</option>
        <option value="product2">Hafza Quran - $50/month</option>
        <option value="product3">Quran with Tafseer - $50/month</option>
      </select>
    </div>
    <div className="form-group">
    <CardElement options={{ style: { base: { fontSize: '16px', color: '#333' } } }} className="cardElement" />
    </div>

    <button type="submit" className="form-button" disabled={!stripe || !elements}>
      Subscribe Now
    </button>
  </form>
  {loading && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '5px', color: '#fff' }}>
          <p>Loading...</p>
          <div className="spinner" style={{ border: '8px solid #f3f3f3', borderTop: '8px solid #3498db', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      )}

      {showAlert && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: '#d4edda', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
          <p>{alertMessage}</p>
          <button
            onClick={() => setShowAlert(false)}
            style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' }}
          >
            &times;
          </button>
        </div>
      )}
</div>



  

  


  
  );
}
