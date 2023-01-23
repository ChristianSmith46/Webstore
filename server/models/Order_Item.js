const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order_Item extends Model { }

Order_Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: DataTypes.NUMBER,
            min: 0,
            defaultValue: 0
        },
        total_price: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        order_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            references: {
                model: 'order',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            references: {
                model: 'product',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'order_item'
    }
);

module.exports = Order_Item;