function beforeGet() {
  return async function(hook) {

    console.log()

    return Promise.resolve(hook)
  }
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [ beforeGet() ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
