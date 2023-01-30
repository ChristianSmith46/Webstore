const router = require('express').Router();

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderRoute = require('./orderRoutes');

router.use('/user', userRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoute);

module.exports = router;