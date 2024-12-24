import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const SubscriptionForm = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [subscriptionId, setSubscriptionId] = useState('');

  const createSubscription = async () => {
    if (!selectedProduct) {
      alert('Please select a subscription plan.');
      return;
    }

    try {
      const response = await fetch('/api/paypal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId: selectedProduct,
        }),
      });

      const data = await response.json();
      if (data.id) {
        setSubscriptionId(data.id);
      } else {
        throw new Error('Failed to create subscription');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to create subscription.');
    }
  };

  return (
    <div className="subscription-form">
    <select
  id="subscriptionPlan"
  value={selectedProduct}
  onChange={(e) => setSelectedProduct(e.target.value)}
  className="form-select"
  required
>
  <option value="">Choose a plan...</option>
  <option value="PAYPAL_PLAN_ID_1">Book keeping - $150/month</option>
  <option value="PAYPAL_PLAN_ID_2">Tax practices - $200/month</option>
  <option value="PAYPAL_PLAN_ID_3">Internal controls - $150/month</option>
  <option value="PAYPAL_PLAN_ID_4">Internal Auditing - $150/month</option>
  <option value="PAYPAL_PLAN_ID_5">External Audits - $150/month</option>
  <option value="PAYPAL_PLAN_ID_6">Fixed Assets Management - $1000/month</option>
  <option value="PAYPAL_PLAN_ID_7">Secretarial practices - $400/month</option>
  <option value="PAYPAL_PLAN_ID_8">Corporate solutions - $300/month</option>
  <option value="PAYPAL_PLAN_ID_9">Management Solutions - $300/month</option>
  <option value="PAYPAL_PLAN_ID_10">IRS - $100/month</option>
  <option value="PAYPAL_PLAN_ID_11">Tax returns for individuals, corporate returns - $200/month</option>
  <option value="PAYPAL_PLAN_ID_12">Payroll Management systems - $300/month</option>
  <option value="PAYPAL_PLAN_ID_13">Feasibility of new projects - $5000/month</option>
  <option value="PAYPAL_PLAN_ID_14">Acquisitions and mergers - $300/month</option>
  <option value="PAYPAL_PLAN_ID_15">Investment portfolio - $450/month</option>
</select>


      <button onClick={createSubscription}>Create Subscription</button>

      {subscriptionId && (
        <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
          <PayPalButtons
            createSubscription={(data, actions) => {
              return actions.subscription.create({
                'plan_id': selectedProduct
              });
            }}
            onApprove={(data, actions) => {
              alert('Subscription successful!');
            }}
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
};

export default SubscriptionForm;
