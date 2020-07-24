const routes = require('express').Router();
const get = require('./../controllers/get');
const api = require('./../controllers/api');
const apiform = require('./../controllers/apiform');

routes.get('/', get);
routes.get('/api/view/:table', api);
routes.get('/api/edit/:table/:id', apiform);

module.exports = routes; 