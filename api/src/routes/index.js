const router = require('express').Router();

router.use('/', (req, res, next) => {
  res.send('hola');
});

module.exports = router;
