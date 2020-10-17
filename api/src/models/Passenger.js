const { DataTypes } = require('sequelize');
const db = require('../../config/db/index');

const Passenger = db.define('passenger', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  flightNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    isAlphanumeric: true,
    len: [5],
  },

  totalPackages: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
  },
});

module.exports = Passenger;
