const cors = require('cors');
const bodyParser = require('body-parser');

const CORS_WHITELIST = require('./constants/frontend');

const corsOptions = {
  origin: (origin, callback) =>
    (CORS_WHITELIST.indexOf(origin) !== -1)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'))
};

const configureServer = app => {
  console.log(corsOptions.origin);
  console.log(CORS_WHITELIST.indexOf('https://www.habitsocks.com') !== -1);
  app.use(cors(corsOptions));

  app.use(bodyParser.json());
};

module.exports = configureServer;
