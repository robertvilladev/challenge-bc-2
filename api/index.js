const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./config/db');
const routes = require('./src/routes');

const app = express();

//* middlewares
app.use(morgan('dev'));
app.use(cors({ origin: true }));

//* parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* rotues
app.use('/api', routes);
app.use('/', (_req, res, _next) => res.redirect('/api'));

//* middleware error
app.use(function (err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send('Server error, something broke!');
});

db.sync({ force: true }).then(() => {
  app.listen(1337, () => {
    console.log('conected whit db and server on port 1337');
  });
});
