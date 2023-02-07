const router = require('express').Router();

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderRoute = require('./orderRoutes');
const checkoutRoute = require('./checkoutRoutes');

router.use('/user', userRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoute);
router.use('/checkout', checkoutRoute);

module.exports = router;