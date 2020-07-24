const express = require('express');
const app = require('./src/config/custom-express');
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');

module.exports = app;

app.listen(3000, () => { console.log('Servidor rodando na porta 3000...')});