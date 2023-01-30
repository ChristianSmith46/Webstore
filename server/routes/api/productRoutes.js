const router = require('express').Router();
const {
    getProducts,
    getSingleProduct,
    createProduct
} = require('../../controllers/productController');

router.route('/').get(getProducts).post(createProduct);

router.route('/:productId').get(getSingleProduct);

module.exports = router;

