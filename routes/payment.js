const stripe = require('../constants/stripe');

const postStripeCharge =  res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = app => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() });
  });

  app.post('/', (req, res) => {
    console.log(req.body);
    stripe.orders.create(req.body.order);
    stripe.orders.pay(req.body.pay);
    // const chargeReq = Object.keys(req.body).reduce((acc, cur) => cur === 'email' ? acc : {...acc, [cur]: req.body[cur]}, {})
    // stripe.charges.create(chargeReq, postStripeCharge(res));
  });

  return app;
};

module.exports = paymentApi;
