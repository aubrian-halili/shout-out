import { Router } from 'express';

const routes = new Router();
const shouts = require('./shouts');

routes.use('/shouts', shouts);

export default routes;
