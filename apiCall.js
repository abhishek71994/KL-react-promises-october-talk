//http://api.open-notify.org/astros.json

// How many humans are in space right now?

// Overview
// This API returns the current number of people in space. 
// When known it also returns the names and spacecraft those people are on. 
// This API takes no inputs.
const axios = require('axios');

const peopleAPI = () => axios.get('http://api.open-notify.org/astros.json')

const facts = async () => {
  const prom = await peopleAPI()

  return prom
}

const spaceShip = async () => {
  const prom = await peopleAPI()

  return prom.data.people[0].craft
}

facts()

const exportFunction = {
  facts,
  spaceShip
}

module.exports = exportFunction;