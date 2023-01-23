const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
    {
        id: {

        },
        email: {

        },
        firstName: {

        },
        lastName: {

        },
        password: {

        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
    }
)