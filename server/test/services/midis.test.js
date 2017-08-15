const assert = require('assert');
const app = require('../../src/app');

describe('\'midis\' service', () => {
  it('registered the service', () => {
    const service = app.service('midis');

    assert.ok(service, 'Registered the service');
  });
});
