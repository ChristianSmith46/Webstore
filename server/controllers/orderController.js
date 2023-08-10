const { User, Order, Order_Item } = require("../models");

// TODO: Create logic for the orderControllers
module.exports = {
    async getUserOrders(req, res) {
        if (!req.user) return res.status(401);
        try {
            const orders = await Order.findAll({where: {user_id: req.user.id}, include: [{model: Order_Item, as: 'items'}]});
            if (!orders) return res.status(401).json({ error: "Can't find any orders" });
            if (orders.length < 1) return res.json([]);
            return res.json(orders.toJSON());
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Couldn't get orders"});
        }
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