require('dotenv').config();
const stripeKey = process.env.STRIPE_KEY;
const stripe = require("stripe")(stripeKey);

const calculateOrderAmount = (items) => {
    // Just creating a temp function to calculate price while testing
    return 100;
}

module.exports = {
    async createPaymentIntent(req, res) {
        const { items } = req.body;
        // Alternatively, set up a webhook to listen for the payment_intent.succeeded event
        // and attach the PaymentMethod to a new Customer
        const customer = await stripe.customers.create();

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            customer: customer.id,
            setup_future_usage: "off_session",
            amount: calculateOrderAmount(items),
            currency: "usd",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.json({
            clientSecret: paymentIntent.client_secret,
        });
    },

}