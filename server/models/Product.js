const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model { }

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            trim: true
        },
        description: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.NUMBER,
            allowNull: false,
            min: 0.99
        },
        quantity: {
            type: DataTypes.NUMBER,
            min: 0,
            defaultValue: 0
        },
        category: {
            type: DataTypes.NUMBER,
            allowNull: false,
            references: {
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'product'
    }
);

module.exports = Product;