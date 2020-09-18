'use strict';

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('createUser', '/handlers/user/create.js', 'create');

describe('createUser', () => {
  before((done) => {
    done();
  });

  // it('should insert a user', async () => {
  //   const response = await wrapped.run({
  //     "body": "{ \"name\": \"john\",\"lastname\":\"doe\",\"email\":\"johndoe@gmail.com\",\"age\": \"22\" }"
  //   });

  //   expect(response.statusCode).to.be.equal(500);
  // });

  it('should receive an error', async () => {
    const response = await wrapped.run({    
      "body": "{}"
    });

    expect(response.statusCode).to.be.equal(500);
  });

  
});
