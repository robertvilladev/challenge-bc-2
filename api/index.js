const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { db } = require('./models');

const app = express();

//* middlewares
app.use(morgan('dev'));
app.use(cors({ origin: true }));

//* parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* rotues
app.use('/api', require('./routes'));

app.use('/', (_req, res, _next) => {
  return res.redirect('/api');
});

//* middleware error
app.use(function (err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send('Server error, something broke!');
});

//* db sync and server on
db.sync({ force: false }).then(() => {
  app.listen(5000, () => {
    console.log('conected whit db and server on port 5000');
  });
});
