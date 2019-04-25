const express = require('express');

const app = express();

app.use(require('./usuario'));
app.use(require('./personaje'));
app.use(require('./seleccion'));

module.exports = app;