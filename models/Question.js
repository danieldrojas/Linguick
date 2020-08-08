const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {
    type:Array,
    required:true
  }
  ,
  choices: {
    type:Array,
    required:true
  }
  ,
  answers: {
    type:Array,
    required:true
  }
  ,
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;