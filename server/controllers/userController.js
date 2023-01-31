const {signToken} = require('../utils/auth');
// TODO: Create logic for the userControllers
module.exports = {
    getMe(req, res) {
        res.json("OK");
    },
    createUser(req, res) {
        res.json("OK");
    },
    loginUser(req, res) {
        const token = signToken({firstName: "test", email: "test@gmail.com", id: 1});
        res.json({token});
    }
}