import { Router } from 'express';

import find from './find';
import save from './save';

const users = new Router();
users.get('/', find);
users.post('/', save);

module.exports = users;
