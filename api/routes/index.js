const router = require('express').Router();

const test = require('./test');
const passengers = require('./passengers');
const packages = require('./packages');

router.use('/', test);
router.use('/passengers', passengers);
router.use('/packages', packages);

module.exports = router;
