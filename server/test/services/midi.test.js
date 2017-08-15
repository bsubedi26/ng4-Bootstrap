const assert = require('assert');
const app = require('../../src/app');

describe('\'midi\' service', () => {
  it('registered the service', () => {
    const service = app.service('midi');

    assert.ok(service, 'Registered the service');
  });
});
