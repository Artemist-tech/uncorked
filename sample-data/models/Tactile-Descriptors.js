/* eslint-disable */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TactileSchema = new Schema({
  acidity: String,
  body: String,
  tannin: String,
  finish: String
});

const TactileDescriptors = mongoose.model('tactile-descriptors', TactileSchema);
module.exports = TactileDescriptors;
