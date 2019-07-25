'use strict';
const assert = require('assert');
const mock = require('egg-mock');

describe('test/module.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/module-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, module')
      .expect(200);
  });

});