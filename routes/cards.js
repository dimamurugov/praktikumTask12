const routercards = require('express').Router();
const fs = require('fs').promises;

routercards.get('/cards', (req, res) => {
  fs.readFile('data/cards.json', 'utf-8')
    .then((cards) => {
      cards = JSON.parse(cards);
      res.status(200).json(cards);
    })
    .catch(() => res.status(500).json({ message: 'Ошибка при чтении файла' }));
});

module.exports = { routercards };
