const express = require('express');
const bodyParser = require('body-parser'); 
const expressLayouts = require('express-ejs-layouts');
const mysql = require('mysql');
let dbconfig = require('./db-config');
const app = express();

global.connection = mysql.createConnection(dbconfig);
 
app.set('views', './src/app/views');
app.set('view engine', 'ejs');

app.use('/public', express.static('/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use(expressLayouts);

const routes = require('../app/routes'); 
app.use('/', routes);

module.exports = app;