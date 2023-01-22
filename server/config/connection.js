const { Sequelize } = require('sequelize');
require('dotenv').config();

const connectionString = process.env.PG_URL || 'postgres://postgres:password@localhost:5432/webstore'

const sequelize = new Sequelize(connectionString);

module.exports = sequelize;