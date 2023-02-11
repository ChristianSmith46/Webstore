require('dotenv').config();
const stripeKey = process.env.STRIPE_KEY;
const stripe = require("stripe")(stripeKey);

const calculateOrderAmount = async (items) => {
    let total;
    // For each item retrieve price and multiply by item count
    for(let item of items){
        // Use stripe api and extend to get the price based on product id
        const product = await stripe.products.retrieve(item.id, {expand: ['default_price']});
        if(total){
            total += product.default_price.unit_amount * item.count;
        } else {
            total = product.default_price.unit_amount * item.count;
        }
    }
    if(total){
        return total;
    } else {
        return -1;
    }
}

module.exports = {
    async createPaymentIntent(req, res) {
        const { items } = req.body;
        console.log({items});
        // Alternatively, set up a webhook to listen for the payment_intent.succeeded event
        // and attach the PaymentMethod to a new Customer
        const customer = await stripe.customers.create();

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            customer: customer.id,
            setup_future_usage: "off_session",
            amount: await calculateOrderAmount(items),
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