const express = require('express');
const path = require('path');
const { routerusers } = require('./routes/users');
const { routercards } = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use(routerusers);
app.use(routercards);

app.listen(PORT);

app.use('/', (req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));
