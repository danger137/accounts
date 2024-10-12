// app/api/paypal/route.js
import axios from 'axios';

export async function POST(req) {
    try {
      const { planId } = await req.json();
  
      if (!planId) {
        return new Response(JSON.stringify({ error: "Plan ID is required" }), { status: 400 });
      }
  
      // Get PayPal access token
      const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`).toString('base64');
      const { data: authData } = await axios.post(
        'https://api-m.sandbox.paypal.com/v1/oauth2/token',
        'grant_type=client_credentials',
        {
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
  
      const accessToken = authData.access_token;
  
      // Create subscription
      const { data } = await axios.post(
        'https://api-m.sandbox.paypal.com/v1/billing/subscriptions',
        {
          plan_id: planId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error("Error response:", error.response?.data || error.message);
      return new Response(JSON.stringify({ error: error.response?.data || "Failed to create subscription" }), { status: 500 });
    }
  }
  
