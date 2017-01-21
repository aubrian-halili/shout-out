/* eslint func-names: ["error", "never"]*/
import mongoose from '../services/mongoose';

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  created_at: Date,
  updated_at: Date,
});

userSchema.pre('save', function (next) {
  const currentDate = new Date();

  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

const User = mongoose.model('User', userSchema);
export default User;
