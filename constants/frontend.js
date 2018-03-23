const FRONTEND_DEV_URLS = [ 'http://localhost:5000' ];

const FRONTEND_PROD_URLS = [
  'https://www.habitsocks.com',
  'https://habitsocks.com',
  'https://habit-socks-production.herokuapp.com'
];

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS;
