const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Stripe with your secret API key
const stripe = Stripe('sk_test_51O24gxD7w9697TwBnMpkAweKDWIXAdGyvnIKzCuWbcRSpxgNSvlTkbk6lft3jgorbgapyfiS6kW7ytWEu5u6acDt00C6XIDdWR');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Endpoint to create a payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    // Create a payment intent with the specified amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd', // Specify your currency
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});