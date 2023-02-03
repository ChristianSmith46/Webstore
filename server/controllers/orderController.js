const { User, Order } = require("../models");

// TODO: Create logic for the orderControllers
module.exports = {
    getUserOrders(req, res) {
        res.json("OK");
    },
    getSingleUserOrder(req, res) {
        res.json("OK");
    },
    async createUserOrder(req, res) {
        if (!req.user) return res.status(401);
        try {
            const user = await User.findByPk(req.user.id);
            if (!user) return res.status(401).json({ error: "Can't find User" });
            const order = await Order.create({user_id: user.id});
            if(!order) return res.status(500).json({error: "Couldn't create Order"});
            return res.json(order.toJSON());
        } catch (error) {
            return res.status(500);
        }
    }
}