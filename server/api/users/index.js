import { Router } from 'express';

import find from './find';
import findAll from './findAll';
import save from './save';
import update from './update';
import remove from './delete';

const users = new Router();
users.get('/', find);
users.get('/all', findAll);
users.post('/', save);
users.put('/:userId', update);
users.delete('/:userId', remove);

module.exports = users;
