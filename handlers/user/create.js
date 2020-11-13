'use strict';

const uuid = require('uuid');
const dynamoDb = require('../../dynamoDb');
const Joi = require('joi');

module.exports.create = async (event, context, callback) => {

  const timestamp = new Date().getTime();
  const requestBody = JSON.parse(event.body);
  let response = {};

  const schema = Joi.object({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer()
  });

  const { error, value } = schema.validate(requestBody);

  if( error ) {
    response = {
      statusCode: 422,
      body: JSON.stringify({ 
        message: 'Invalid request', 
        errors: error.details.map(e => e.message).join(', ') }),
    };

    callback(null, response);
  }

  try {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v1(),
        name: value.name,
        lastname: value.lastname,
        email: value.email,
        age: value.age,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    };
  
    dynamoDb.put(params, (error) => {
      if (error) {

        response = {
          statusCode: 500,
          body: JSON.stringify({ message: 'Couldn\'t save data.'}),
        };

        callback(null, response);

        return;
      }              
    });

    response = {
      statusCode: 201,
      body: JSON.stringify({ message: 'register created'}),
    };
    callback(null, response);

  } catch (error) {
    // console.error(error);
    response = {
      statusCode: 500,
      body: JSON.stringify({ message: 'Couldn\'t save data.'}),
    };
    callback(null, response);
  };
  
};