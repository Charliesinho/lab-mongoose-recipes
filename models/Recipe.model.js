const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set("strictQuery", true)

const recipeSchema = new Schema({
 title: {
  type: String,
  required: true,
  unique: true
 },
 level: {
 type: String,
 enum: ["Easy Peasy","Amateur Chef", "UltraPro Chef"]
 },
 ingredients: [ String ],
 cuisine: {
  type: String,
  required: true
 },
 dishType : {
  type: String,
  enum: ["breakfast","main_course", "soup", "snack", "drink", "dessert", "other"]
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: {
    type: Number,
    min: 0
  },
  creator: String,
  created: {
    type: Date,
    default: 2023-02-02
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
