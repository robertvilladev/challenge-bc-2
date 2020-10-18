const Passenger = require('./Passenger');
const Packages = require('./Package');
const db = require('../db');

Passenger.hasMany(Packages, { as: 'packages', foreignKey: 'passengerId' });

module.exports = {
  Passenger,
  Packages,
  db,
};
