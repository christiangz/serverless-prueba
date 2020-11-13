'use strict';

const axios = require('../../axios');

module.exports.health = async (event, context, callback) => {

  try {
    const swapi = await axios.get('/');

    let response = {};

    if (swapi.status == 200) {
      response = {
        statusCode: 200,
        body: JSON.stringify({status:'available'})
      };
    } else {      
      response = {
        statusCode: 500,
        body: JSON.stringify({status:'unavailable'})
      };
    }

    callback(null, response);

  } catch (error) {
    console.log(error);
  }  

};