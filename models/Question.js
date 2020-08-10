const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: [
  ],
  choices: [
  ],
  answers: [
  ],
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;