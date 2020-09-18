'use strict';

const uuid = require('uuid');
const dynamoDb = require('../../dynamoDb');
const axios = require('../../axios');
const utils = require('../../utils');

module.exports.create = async (event, context, callback) => {

  const timestamp = new Date().getTime();
  const requestBody = JSON.parse(event.body);
  let response = {};  

  const name = requestBody.name;
  const lastname = requestBody.lastname;
  const email = requestBody.email;
  const age = requestBody.age;

  //TODO: validate

  try {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v1(),
        name: name,
        lastname: lastname,
        email: email,
        age: age,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    };
  
    dynamoDb.put(params, (error) => {
      if (error) {
        // console.error(error);

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