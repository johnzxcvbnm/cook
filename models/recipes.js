const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = Schema({
  name: {type: String, unique: true},
  time: Number,
  difficulty: Number,
  arthor: String,
  description: String,
  images: [String],
  ingredients: [String],
  directions: [String],
  ratings: [Number],
  protect: Boolean,
  tags: [String]
});

module.exports = mongoose.model("Recipe", recipeSchema);
