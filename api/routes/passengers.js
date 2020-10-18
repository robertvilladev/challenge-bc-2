const router = require('express').Router();
const controllers = require('../controllers/passengerControllers');

// All passengers
router.get('/', controllers.getAll);

// Create passenger
router.post('/', controllers.add);

// Single passenger
router.get('/:passengerId', controllers.getOne);

// Delete passenger packages
router.delete('/:passengerId', controllers.delete);

module.exports = router;
