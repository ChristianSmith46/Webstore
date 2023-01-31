const router = require('express').Router();
const {
    getMe,
    createUser,
    loginUser
} = require('../../controllers/userController');

router.route('/').get(getMe).post(createUser);
router.route('/login').post(loginUser);

module.exports = router;