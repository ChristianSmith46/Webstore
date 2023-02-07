const router = require('express').Router();

const { createPaymentIntent } = require('../../controllers/checkoutController');

router.route('/create-payment-intent').post(createPaymentIntent);

module.exports = router;