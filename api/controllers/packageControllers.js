const { Passenger, Packages } = require('../models');

const controllers = {};

controllers.add = async (req, res, next) => {
  const { category, passengerId, name } = req.body;

  try {
    if (!category || !passengerId || !name || ![1, 2, 3].includes(category))
      return res.status(400).json({ message: 'Bad Request' });

    const passenger = await Passenger.findByPk(passengerId);
    if (!passenger)
      return res.status(404).json({ message: 'Passenger doesnt exist' });

    if (passenger.totalPackages >= 3)
      return res.status(404).json({
        message:
          'Passenger already has the maximum number of packages available',
      });

    await Packages.create({ category, passengerId, name });

    passenger.totalPackages = passenger.totalPackages + 1;
    await passenger.save();

    res.status(201).send({ message: 'Successfully added' });
  } catch (err) {
    next(err);
  }
};

module.exports = controllers;
