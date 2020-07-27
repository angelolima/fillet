const express = require('express'); 
const faker = require('faker');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const mysql = require('mysql');
const app = express();

app.set('views', './src/app/views');
app.set('view engine', 'ejs');

const routes = require('../app/routes'); 
app.use('/', routes);

module.exports = app;