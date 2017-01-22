/* eslint func-names: "off"*/
import mongoose from '../services/mongoose';

const Schema = mongoose.Schema;
const ShoutSchema = new Schema({
  text: String,
  user_id: String,
  created_at: Date,
  updated_at: Date,
});

ShoutSchema.pre('save', function (next) {
  const currentDate = new Date();

  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

const Shout = mongoose.model('Shout', ShoutSchema);
export default Shout;
