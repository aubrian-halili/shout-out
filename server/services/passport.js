/* eslint no-underscore-dangle: "off"*/
/* eslint consistent-return: "off"*/
import passport from 'passport';
import passportLocal from 'passport-local';
import User from '../models/User';

const LocalStrategy = passportLocal.Strategy;

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
      return done(null, user);
    });
  });
}));

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

export default passport;
