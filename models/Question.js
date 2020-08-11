const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: 
    {
      type: String,
    },
  choices: [
    {
      type: String,
    },
  ],
  answer: 
    {
      type: String,
      required: true,
    },
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
