const routes = require('express').Router();
const get = require('./../controllers/get');
const api = require('./../controllers/api'); 

routes.get('/', get);
routes.get('/api/view/:table', api); 

module.exports = routes; 