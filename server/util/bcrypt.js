import bcrypt from 'bcrypt';

import config from '../config';

export const hash = (password, cb) => {
  bcrypt.hash(password, config.bcrypt.saltRounds, (err, value) => {
    cb(err, value);
  });
};

export const compare = (password, hashPass, cb) => {
  bcrypt.compare(password, hashPass, (err, isSame) => {
    cb(err, isSame);
  });
};
