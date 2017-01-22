import { Router } from 'express';

import passport from '../../services/passport';
import { success } from '../../util/response';

const auth = new Router();

auth.post('/login', passport.authenticate('local'), (req, res) => {
  success(res, {
    name: req.user.name,
  });
});

auth.get('/logout', (req, res) => {
  req.logout();
  success(res, 'Logout');
});

module.exports = auth;
