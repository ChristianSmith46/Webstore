const { signToken } = require('../utils/auth');
const { User, Order } = require('../models');
// TODO: Create logic for the userControllers
module.exports = {
    async getMe(req, res) {
        try {
            if(!req.user) return res.status(401).json({error: "No User Found"});
            const user = await User.findByPk(req.user.id, {include: [{all: true}], attributes: {exclude: ['password']}});
            if(!user) return res.status(401).json({error: "Database Error"});
            return res.json(user.toJSON());
        } catch (error) {
            res.status(500);
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            const { first_name, email, id } = user;
            const token = signToken({ first_name, email, id });
            return res.json({ token });
        } catch (error) {
            return res.status(500).json({ error: error.errors[0].message });
        }
    },
    async loginUser(req, res) {
        try {
            const user = await User.findOne({ where: { email: req.body.email } });
            if (!user) return res.status(401).json({ error: "Invalid Email Address" });
            const validPassword = user.checkPassword(req.body.password);
            if (!validPassword) return res.status(401).json({ error: "Invalid Password" });
            const { first_name, email, id } = user;
            const token = signToken({ first_name, email, id });
            res.json({ token });
        } catch (error) {
            return res.status(500);
        }
    }
}