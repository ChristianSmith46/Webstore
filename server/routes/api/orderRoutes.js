const router = require('express').Router();
const {
    getUserOrders,
    getSingleUserOrder,
    createUserOrder
} = require('../../controllers/orderController');

router.route('/orders').get(getUserOrders).post(createUserOrder);
router.route('/orders/:orderId').get(getSingleUserOrder);

module.exports = router;