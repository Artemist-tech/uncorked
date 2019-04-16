/* eslint-disable */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TactileSchema = new Schema({
  acidity: {
    type: String
  },
  body: {
    type: String
  },
  tannin: {
    type: String
  },
  finish: {
    type: String
  }
});

const TactileDescriptors = mongoose.model('tactile-descriptors', TactileSchema);
module.exports = TactileDescriptors;
