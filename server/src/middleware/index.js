const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');
const createMessage = require('./createMessage');
const github = require('./github');
const githubOauth = require('github-oauth');

module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters, `notFound` and
  // the error handler have to go last.
  const app = this;
  app.get("/auth/github/callback", function (req, res) {
    console.log("received callback");
    return githubOauth.callback(req, res);
  });


  app.use('/create/message', createMessage(app));
  app.use('/auth/github', github(app));
  app.use(notFound());
  app.use(handler());
};
