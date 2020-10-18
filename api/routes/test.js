const router = require('express').Router();

// Test API
router.get('/', (req, res, next) => {
  res.status(200).send('API its work');
});

router.get('/time', (req, res, next) => {
  res.status(200).send(new Date());
});

module.exports = router;
