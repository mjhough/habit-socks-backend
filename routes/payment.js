const stripe = require('../constants/stripe');

const postStripeCharge =  (res, err, order) => {
  if (err) {
    res.status(500).send({ error: err });
  } else {
    res.status(200).send({ success: order });
  }
}

const paymentApi = app => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() });
  });

  app.post('/', (req, res) => {
    console.log(req.body);
    stripe.orders.create(req.body.order, (err, order) =>
      stripe.orders.pay(order.id, req.body.pay, (err, order) => postStripeCharge(res, err, order)));
  });

  return app;
};

module.exports = paymentApi;
