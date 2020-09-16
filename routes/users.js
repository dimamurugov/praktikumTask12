const routerusers = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

routerusers.get('/users', (req, res) => {
  fs.readFile('data/user.json', 'utf-8')
    .then((users) => {
      users = JSON.parse(users);
      res.status(200).json(users);
    })
    .catch(() => res.status(500).json({ message: 'Ошибка при чтении файла' }));
});

routerusers.get('/users/:id', (req, res) => {
  fs.readFile(path.join('data/user.json'), 'utf-8')
    .then((users) => {
      function findPerson(id) {
        return users.find((item) => item._id === id);
      }

      users = JSON.parse(users);
      if (!findPerson(req.params.id)) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.status(200).send(findPerson(req.params.id));
    })
    .catch(() => {
      res.status(500).json({ message: 'Ошибка при чтении файла' });
    });
});

module.exports = { routerusers };
