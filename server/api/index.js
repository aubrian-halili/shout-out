import { Router } from 'express';

const routes = new Router();
const shouts = require('./shouts');
const users = require('./users');

routes.use('/shouts', shouts);
routes.use('/users', users);

export default routes;
