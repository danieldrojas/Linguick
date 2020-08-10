const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LanguageSchema = new Schema({
  language_name: {
    type: String,
    required: "language is required",
  },
  characters: {
    type: String,
    required: "character is required",
  },
});

const Language = mongoose.model("Language", LanguageSchema);

module.exports = Language;
