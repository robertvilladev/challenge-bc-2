const controllers = {};
const { Passenger, Packages } = require('../models');

controllers.getAll = async (req, res, next) => {
  try {
    const passengers = await Passenger.findAll({
      order: [['id', 'DESC']],
    });

    res.status(200).json(passengers);
  } catch (err) {
    next(err);
  }
};

controllers.getOne = async (req, res, next) => {
  const { passengerId } = req.params;

  try {
    const passenger = await Passenger.findByPk(passengerId, {
      include: [
        {
          model: Packages,
          as: 'packages',
        },
      ],
    });

    return !passenger
      ? res.status(404).json({ message: 'Passenger not found' })
      : res.status(200).json(passenger);
  } catch (err) {
    next(err);
  }
};

controllers.add = async (req, res, next) => {
  const { name, code } = req.body;

  try {
    if (!name || !code || code.length > 5)
      return res.status(400).json({ message: 'Bad Request' });

    const check = await Passenger.findOne({
      where: {
        code,
      },
    });

    if (check)
      return res
        .status(422)
        .json({ message: 'Error, fligth number is already exists' });

    await Passenger.create({ name, code: code.toUpperCase() });

    res.status(201).json({ message: 'created successfully' });
  } catch (err) {
    next(err);
  }
};

controllers.delete = async (req, res, next) => {
  const { passengerId } = req.params;
  try {
    if (!passengerId) return res.status(400).json({ message: 'Bad Request' });

    const passenger = await Passenger.findByPk(passengerId);
    if (!passenger)
      return res.status(404).json({ message: 'Passenger doesnt exist' });

    await Packages.destroy({
      where: {
        passengerId,
      },
    });

    passenger.totalPackages = 0;
    await passenger.save();

    res.status(200).send({ message: 'Packages deleted successfully ' });
  } catch (err) {
    next(err);
  }
};

module.exports = controllers;
