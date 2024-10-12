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
    product1: 'price_1Q9CDEP0ebickvSnQHUu2u9u',
    product2: 'price_1Q9CG2P0ebickvSnDxL0UM3w',
    product3: 'price_1Q9CJ2P0ebickvSnocEo6Mke',
    product4: 'price_1Q9CK7P0ebickvSn8n3C8h8x',
    product5: 'price_1Q9CKyP0ebickvSn5Aip2vFj',
    product6: 'price_1Q9CMrP0ebickvSnWMwCpNBK',
    product7: 'price_1Q9COnP0ebickvSnknrRIzKp',
    product8: 'price_1Q9CQKP0ebickvSnnwzoOOM2',
    product9: 'price_1Q9CRMP0ebickvSnTSbpdW2B',
    product10: 'price_1Q9CS2P0ebickvSnYF1qFWcR',
    product11: 'price_1Q9CSqP0ebickvSnx6oBhH2y',
    product12: 'price_1Q9CTpP0ebickvSndel0Pxrw',
    product13: 'price_1Q9CUwP0ebickvSn4JJWUOwy',
    product14: 'price_1Q9CVcP0ebickvSn7jw61lUE',
    product15: 'price_1Q9CW7P0ebickvSno26WMn0R',
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
        <option value="product1">Book keeping- $150/month</option>
        <option value="product2">Tax practices - $200/month</option>
        <option value="product3">Internal controls - $150/month</option>
        <option value="product4">Internal Auditing- $150/month</option>
        <option value="product5">External Audits - $150/month</option>
        <option value="product6">Fixed Assets Management - $1000/month</option>
        <option value="product7">Secerterial practices - $400/month</option>
        <option value="product8">Corporate solutions - $300/month</option>
        <option value="product9">Management Solutions - $300/month</option>
        <option value="product10">IRS - $100/month</option>
        <option value="product11">Tax returns indibiduals, corporate returns - $200/month</option>
        <option value="product12">Payroll Management systems - $300/month</option>
        <option value="product13">Feasibility of new projects - $5000/month</option>
        <option value="product14">Acuiquistions and mergers - $300/month</option>
        <option value="product15">Investment portfolio - $450/month</option>
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
