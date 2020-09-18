'use strict';

const axios = require('../../axios');
const ObjectMapper = require('object-mapper');
const planetMapper = require('../../mappers/planet.mapper');

module.exports.list = async (event, context, callback) => {

  try {
    const planets = await axios.get('/planets/');
    const results = planets.data.results;

    // console.log(planets.data.results);

    const data = results.map((element) => (ObjectMapper(element, planetMapper)));

    const response = {
      statusCode: 200,
      body: JSON.stringify(data),
    };

    callback(null, response);

  } catch (error) {
    console.log(error);
  }
  

};