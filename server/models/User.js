/* eslint func-names: "off"*/
import mongoose from '../services/mongoose';
import { hash, compare } from '../util/bcrypt';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  created_at: Date,
  updated_at: Date,
});

UserSchema.pre('save', function (next) {
  const currentDate = new Date();

  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }

  hash(this.password, (err, hashPass) => {
    if (err) {
      next(err);
    } else {
      this.password = hashPass;
      next();
    }
  });
});

UserSchema.methods.isValidPassword = function (password, cb) {
  compare(password, this.password, cb);
};

const User = mongoose.model('User', UserSchema);
export default User;
