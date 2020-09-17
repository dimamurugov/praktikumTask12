const routerusers = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

routerusers.get('/users', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/user.json'), 'utf-8')
    .then((users) => {
      let massUsers = users;
      massUsers = JSON.parse(massUsers);
      res.status(200).json(massUsers);
    })
    .catch(() => res.status(500).json({ message: 'Ошибка при чтении файла' }));
});

routerusers.get('/users/:id', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/user.json'), 'utf-8')
    .then((users) => {
      let massUsers = users;
      massUsers = JSON.parse(massUsers);

      function findPerson(id) {
        /* он ругается на подчёркивания в "_id" а это имя свойства в объекте, который
        я изменять не могу, поэтому я игнорировал это правило в этом месте */

        // eslint-disable-next-line no-underscore-dangle
        return massUsers.find((item) => item._id === id);
      }

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
