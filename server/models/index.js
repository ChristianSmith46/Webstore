const User = require('./User');
const Order = require('./Order');
const Product = require('./Product');
const Category = require('./Category');

User.hasMany(Order, {
    foreignKey: 'user_id'
});

Order.belongsTo(User, {
    foreignKey: 'user_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

module.exports = { User };