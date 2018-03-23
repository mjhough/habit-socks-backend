const cors = require('cors');
const bodyParser = require('body-parser');

const CORS_WHITELIST = require('./constants/frontend');

const corsOptions = {
  origin: CORS_WHITELIST
};

const configureServer = app => {
  console.log(CORS_WHITELIST);
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
};

module.exports = configureServer;
