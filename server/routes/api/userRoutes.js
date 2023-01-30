const router = require('express').Router();
const {
    getMe,
    createUser
} = require('../../controllers/userController');

router.route('/').get(getMe).post(createUser);

module.exports = router;