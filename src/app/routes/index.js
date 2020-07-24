const routes = require('express').Router();
const get = require('./../controllers/get');
const api = require('./../controllers/api');
const clientes = require('./../controllers/clientes');

routes.get('/', get);
routes.get('/api', api);
routes.get('/clientes', clientes);

module.exports = routes; 