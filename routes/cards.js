const routercards = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

routercards.get('/cards', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/cards.json'), 'utf-8')
    .then((cards) => {
      let massCards = cards;
      massCards = JSON.parse(massCards);
      res.status(200).json(massCards);
    })
    .catch(() => res.status(500).json({ message: 'Ошибка при чтении файла' }));
});

module.exports = { routercards };
