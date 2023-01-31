const router = require('express').Router();
const {
    getUserOrders,
    getSingleUserOrder,
    createUserOrder
} = require('../../controllers/orderController');
const {authMiddleware} = require('../../utils/auth');

router.use(authMiddleware);
router.route('/').get(getUserOrders).post(createUserOrder);
router.route('/:orderId').get(getSingleUserOrder);

module.exports = router;