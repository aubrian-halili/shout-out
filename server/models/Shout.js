/* eslint func-names: ["error", "never"]*/
import mongoose from '../services/mongoose';

const Schema = mongoose.Schema;
const shoutSchema = new Schema({
  text: String,
  user_id: String,
  created_at: Date,
  updated_at: Date,
});

shoutSchema.pre('save', function (next) {
  const currentDate = new Date();

  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

const Shout = mongoose.model('Shout', shoutSchema);
export default Shout;
