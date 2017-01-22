import { Router } from 'express';

import find from './find';
import save from './save';

const shouts = new Router();
shouts.get('/', find);
shouts.post('/', save);

module.exports = shouts;
