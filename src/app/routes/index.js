const routes = require('express').Router();

const get = require('./../controllers/get');
const post = require('../controllers/post');
const api = require('./../controllers/api'); 
 
routes.get('/', get);
routes.post('/', post);
routes.get('/api/view/:table', api); 

module.exports = routes; 