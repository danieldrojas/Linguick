const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  quiz_name: {
    type: String,
    trim: true,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});
const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;
