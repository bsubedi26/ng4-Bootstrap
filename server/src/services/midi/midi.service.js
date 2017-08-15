// Initializes the `midi` service on path `/midi`
const createService = require('feathers-mongoose');
const createModel = require('../../models/midi.model');
const hooks = require('./midi.hooks');
const filters = require('./midi.filters');
const fs = require('fs');

    
module.exports = function () {
  const app = this;
  const Model = createModel(app);

  const options = {
    name: 'midi',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/midi', createService(options));
  

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('midi');


  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
