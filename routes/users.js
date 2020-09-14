const routerusers = require('express').Router();
const users = require('../data/user.json');

function findPerson(id) {
  return users.find((item) => item._id === id);
}

routerusers.get('/users', (req, res) => {
  res.send(users);
});

routerusers.get('/users/:id', (req, res) => {
  if (!findPerson(req.params.id)) {
    res.send({ "message": "Нет пользователя с таким id" });
  }
  res.send(findPerson(req.params.id));
});

module.exports = { routerusers };
