const { DataTypes, Model } = require('sequelize');
const db = require('../db/index');

class Packages extends Model {}
Packages.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'package' },
);

module.exports = Packages;
