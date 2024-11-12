const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ratings: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
