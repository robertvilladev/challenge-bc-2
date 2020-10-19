const { Passenger, Packages } = require('./models');

const data = [
  {
    name: 'Julieta Puig',
    code: 'A1B2C3',
    totalPackages: 2,
  },
  {
    name: 'Charles Messier',
    code: 'A2B2C3',
    totalPackages: 3,
  },
  {
    name: ' Ptolomeo',
    code: 'A3B2C3',
    totalPackages: 3,
  },
  {
    name: 'Tycho Brahe',
    code: 'A4B2C3',
    totalPackages: 1,
  },
  {
    name: 'Arno Penzias',
    code: 'A5B2C3',
    totalPackages: 3,
  },
  {
    name: 'Robert Wilson',
    code: 'A6B2C3',
    totalPackages: 3,
  },

  {
    name: 'Nicolás Copérnico',
    code: 'A7B2C3',
  },
  {
    name: ' William Herschel',
    code: 'A8B2C3',
  },
  {
    name: 'Fritz Zwicky',
    code: 'A9B2C3',
  },
  {
    name: 'Johannes Kepler',
    code: 'A1B3C3',
    totalPackages: 3,
  },
  {
    name: 'Edwin Hubble',
    code: 'A1B4C3',
  },
  {
    name: 'Hiparco',
    code: 'A1B5C3',
  },
  {
    name: 'Galileo Galilei',
    code: 'A1B6C3',
  },
  {
    name: 'Nacho Cor',
    code: 'A1B7C3',
  },
  {
    name: 'Euclides (Geometría)',
    code: 'A1B8C3',
    totalPackages: 2,
  },
];

const packages = [
  {
    passengerId: 3,
    category: 1,
  },
  {
    passengerId: 3,
    category: 2,
  },
  {
    passengerId: 3,
    category: 3,
  },
  {
    passengerId: 2,
    category: 2,
  },
  {
    passengerId: 2,
    category: 2,
  },
  {
    passengerId: 2,
    category: 2,
  },
  {
    passengerId: 5,
    category: 2,
  },
  {
    passengerId: 5,
    category: 3,
  },
  {
    passengerId: 5,
    category: 2,
  },
  {
    passengerId: 1,
    category: 2,
  },
  {
    passengerId: 1,
    category: 1,
  },
  {
    passengerId: 15,
    category: 2,
  },
  {
    passengerId: 15,
    category: 1,
  },
  {
    passengerId: 4,
    category: 2,
  },
  {
    passengerId: 6,
    category: 1,
  },
  {
    passengerId: 6,
    category: 2,
  },
  {
    passengerId: 6,
    category: 3,
  },
  {
    passengerId: 10,
    category: 2,
  },
  {
    passengerId: 10,
    category: 3,
  },
  {
    passengerId: 10,
    category: 3,
  },
];

Passenger.bulkCreate(data)
  .then(function () {
    console.log('todo okk');
  })
  .catch(function (err) {
    console.error(err);
  });

Packages.bulkCreate(packages)
  .then(function () {
    console.log('todo okk 2');
  })
  .catch(function (err) {
    console.error(err);
  });
