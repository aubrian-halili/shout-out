import { Router } from 'express';

import get from './get';
import add from './add';

const users = new Router();
users.get('/', get);
users.post('/', add);

module.exports = users;
