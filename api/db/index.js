const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres://postgres:admin@localhost:5432/bc2', {
  logging: false,
});

module.exports = db;
