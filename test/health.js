'use strict';

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('planet', '/handlers/planet/health.js', 'health');

describe('planet', () => {
  before((done) => {
    done();
  });

  it('should get status service planets', async () => {
    const response = await wrapped.run({});

    expect(response).to.not.be.empty;
    expect(response.body).to.not.be.empty;
    expect(response.statusCode).to.be.equal(200);
  });  

});
