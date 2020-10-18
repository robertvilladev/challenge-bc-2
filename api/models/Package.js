const { DataTypes, Model } = require('sequelize');
const db = require('../db/index');

class Packages extends Model {}
Packages.init(
  {
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'package' },
);

module.exports = Packages;
