import { Router } from 'express';

import find from './find';
import save from './save';
import update from './update';
import remove from './delete';
import findByUserId from './findByUserId';

const shouts = new Router();
shouts.get('/', find);
shouts.post('/', save);
shouts.put('/:shoutId', update);
shouts.delete('/:shoutId', remove);
shouts.get('/feeds', findByUserId);

module.exports = shouts;
