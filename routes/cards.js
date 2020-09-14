const routercards = require('express').Router();
const cards = require('../data/cards.json');

routercards.get('/cards', (req, res) => {
  res.send(cards);
});

module.exports = { routercards };
