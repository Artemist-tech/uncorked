/* eslint-disable */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  botanical: {
    type: {
      herbal: String,
      driedHerb: String,
      vegetal: String,
      floral: String
    }
  },
  fruit: {
    type: {
      berry: String,
      citrus: String,
      dried: String,
      tree: String,
      tropical: String
    }
  },
  spice: String,
  wood: String,
  oak: String,
  savoury: {
    type: {
      earthy: String,
      savoury: String,
      nutty: String
    }
  }
});
