const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//* middlewares
app.use(morgan('dev'));
app.use(cors({ origin: true }));

//* parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* rotues
app.use('/api', require('./src/routes'));
app.use('/', (_req, res, _next) => res.redirect('/api'));

//* middleware error
app.use(function (err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send('Server error, something broke!');
});

//* server on
app.listen(3000, () => {
  console.log('server on port 3000');
});
