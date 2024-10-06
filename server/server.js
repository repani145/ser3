// server.js
// require('dotenv').config();
const express = require('express');
const stripe = require('stripe')('sk_test_51PfO6vRtjACyAhQq6GaEjIgG7lRe9wbcSngGD8x11d7h88O194ud6gBNHHvBm7Yl1T8Po194AGtYV40Ry7mnxeoV00Q6rCWwcg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) =>{
  res.send("heloo iam server")
})

app.post('/api/payments/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

const PORT = 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
