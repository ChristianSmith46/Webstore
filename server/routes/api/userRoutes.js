const router = require('express').Router();
const {
    getMe,
    createUser,
    loginUser
} = require('../../controllers/userController');
const { authMiddleware } = require('../../utils/auth');

router.route('/').get(authMiddleware, getMe).post(createUser);
router.route('/login').post(loginUser);

module.exports = router;