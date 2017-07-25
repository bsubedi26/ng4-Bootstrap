const authentication = require('feathers-authentication');
const jwt = require('feathers-authentication-jwt');
const local = require('feathers-authentication-local');
const afterCreateToken = require('./hooks/authentication/after-create-token');

const authHooks = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authentication.hooks.authenticate([
        "jwt",
        "local"
      ]),
    ],
    update: [],
    patch: [],
    remove: [
      authentication.hooks.authenticate('jwt')
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      afterCreateToken()
    ],
    update: [],
    patch: [],
    remove: []
  },

}
module.exports = function () {
  const app = this;
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local(config.local));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });
  // app.service('authentication').hooks(authHooks)

};
