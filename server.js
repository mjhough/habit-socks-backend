const cors = require('cors');
const bodyParser = require('body-parser');

const CORS_WHITELIST = require('./constants/frontend');

const corsOptions = {
  origin: true,
  methods: ['POST']
};

const configureServer = app => {
  console.log(CORS_WHITELIST);
  app.use(cors(corsOptions));
  app.use(bodyParser.urlencoded());
};

module.exports = configureServer;
