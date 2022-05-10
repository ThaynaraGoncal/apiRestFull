const Express = require('express');
const UserController = require('./app/Controllers/UserController');

const routes = new Express.Router();

routes.post("/user", UserController.index);
routes.get("/user", UserController.show);

module.exports = routes;