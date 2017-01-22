import { Router } from 'express';

import auth from './auth';
import shouts from './shouts';
import users from './users';

const routes = new Router();
routes.use('/auth', auth);
routes.use('/shouts', shouts);
routes.use('/users', users);

export default routes;
