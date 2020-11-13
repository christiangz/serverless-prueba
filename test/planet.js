'use strict';

// tests for planet

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('planet', '/handlers/planet/list.js', 'list');

describe('planet', () => {
  before((done) => {
    done();
  });

  it('should get all planets', async () => {
    const response = await wrapped.run({});

    expect(response).to.not.be.empty;
    expect(response.body).to.not.be.empty;
    expect(response.statusCode).to.be.equal(200);
  });
  
  it('should have "spanish" property', async () => {
    const response = await wrapped.run({});

    expect(response).to.not.be.empty;
    expect(response.body).to.not.be.empty;
    expect(response.statusCode).to.be.equal(200);

    const body = JSON.parse(response.body);

    body.map((item) => {
      expect(item).to.have.property('nombre');
    });

  });

});
