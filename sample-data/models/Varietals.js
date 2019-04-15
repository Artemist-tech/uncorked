import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const VarietalSchema = new Schema({
  varietal: {
    type: String,
    unique: true
  },
  appearance: {
    type: {
      clarity: String,
      colour: String
    },
    required: true
  },
  character: {
    type: {
      fruit: String,
      oak: String,
      savoury: String,
      other: String
    }
  }
});

const Varietals = mongoose.model('varietals', VarietalSchema);
module.exports = Varietals;
