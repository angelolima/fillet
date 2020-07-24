const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080; //porta padrão
const mysql = require('mysql');

const routes = require('../app/routes'); 

app.use('/', routes);  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;