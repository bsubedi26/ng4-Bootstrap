const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');
const createMessage = require('./createMessage');
const fetch = require('./fetch.middleware');

module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters, `notFound` and
  // the error handler have to go last.
  const app = this;
  app.use('/create/message', createMessage(app));
  app.use('/fetch/:term', fetch(app));
  app.use(notFound());
  app.use(handler());
};
