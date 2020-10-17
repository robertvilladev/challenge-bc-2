const { Sequelize } = require('sequelize');
const { DATABASE_URI } = require('../env/env.json');

const db = new Sequelize(DATABASE_URI, { logging: false });

module.exports = db;
