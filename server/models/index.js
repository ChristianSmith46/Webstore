const User = require('./User');
const Order = require('./Order');
const Product = require('./Product');
const Category = require('./Category');
const Order_Item = require('./Order_Item');

User.hasMany(Order, {
    foreignKey: 'user_id',
    as: 'orders'
});

Order.belongsTo(User, {
    foreignKey: 'user_id'
});

Order.hasMany(Order_Item, {
    foreignKey: 'order_id',
    as: 'items'
});

Category.hasMany(Product, {
    foreignKey: 'category_id',
    as: 'products'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Order_Item.hasOne(Product, {
    foreignKey: 'product_id'
});

module.exports = { User, Order, Product, Category, Order_Item };