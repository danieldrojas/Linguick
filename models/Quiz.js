const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  quiz_name: {
    type: String,
    trim: true,
  },
  questions: [
    {
      question: {
        type: String,
      },
      choices: [
        {
          type: String,
        },
      ],
      answer: {
        type: String,
        required: true,
      },
    },
  ],
});
const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;
