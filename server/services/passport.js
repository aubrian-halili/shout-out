/* eslint no-underscore-dangle: "off"*/
/* eslint consistent-return: "off"*/
import passport from 'passport';
import passportLocal from 'passport-local';
import User from '../models/User';
import _ from '../util/_';

const LocalStrategy = passportLocal.Strategy;

const getUserDetails = (user) => {
  return {
    id: _.get(user, 'id'),
    name: _.get(user, 'name'),
    following: _.get(user, 'following'),
  };
};

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, (username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: 'Incorrect credentials.' });
    }
    user.isValidPassword(password, (passErr, isSame) => {
      if (passErr) {
        return done(passErr);
      }
      if (!isSame) {
        return done(null, false, { message: 'Incorrect credentials.' });
      }
      return done(null, getUserDetails(user));
    });
  });
}));

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, getUserDetails(user));
  });
});

export default passport;
