'use strict';

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('createUser', '/handlers/user/create.js', 'create');

describe('createUser', () => {
  before((done) => {
    done();
  });
  
  it('should receive "Invalid request" and status code 422', async () => {
    
    const data = {
        name: "",
        lastname: "", 
        email: "",
        age: ""
    };

    const response = await wrapped.run({ "body": JSON.stringify(data) });
    const body = JSON.parse(response.body);

    expect(body.message).to.be.equal('Invalid request');
    expect(response.statusCode).to.be.equal(422);
    expect(body.errors).to.not.be.empty;
  });

  it('should receive an error with Invalid email', async () => {
    const data = {
      name: "john",
      lastname: "doe", 
      email: "invalid email",
      age: 20
    };

    const response = await wrapped.run({ "body": JSON.stringify(data) });
    const body = JSON.parse(response.body);

    expect(body.message).to.be.equal('Invalid request');
    expect(response.statusCode).to.be.equal(422);
    expect(body.errors).to.not.be.empty;
  });

  // it('should receive an error', async () => {
  //   const data = {
  //     name: "john",
  //     lastname: "doe", 
  //     email: "johndoe@gmail.com",
  //     age: 20
  //   };

  //   const response = await wrapped.run({
  //     "body": JSON.stringify(data)
  //   });

  //   expect(response.statusCode).to.be.equal(500);
  // });
  
});
