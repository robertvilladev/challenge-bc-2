const { DataTypes, Model } = require('sequelize');

const db = require('../db/index');

class Passenger extends Model {}

Passenger.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    code: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true,
      unique: true,
    },

    totalPackages: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: 'passenger' },
);

module.exports = Passenger;
