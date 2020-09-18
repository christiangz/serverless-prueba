'use strict';

const AWS = require('aws-sdk');

module.exports = new AWS.DynamoDB.DocumentClient(
  process.env.IS_OFFLINE ? {region: 'localhost', endpoint: 'http://localhost:8000'} : {}
);