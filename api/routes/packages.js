const router = require('express').Router();
const controllers = require('../controllers/packageControllers');

// Create package
router.post('/', controllers.add);

module.exports = router;
