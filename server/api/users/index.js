import { Router } from 'express';

import find from './find';
import save from './save';
import remove from './delete';

const users = new Router();
users.get('/', find);
users.post('/', save);
users.delete('/:userId', remove);

module.exports = users;
