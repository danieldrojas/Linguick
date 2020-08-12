const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LBSchema = new Schema({
  username: {
    type: String,
  },
  quizName: {
    type: String,
  },
  score: {
    type: String,
  },
});

const Leaderboard = mongoose.model("Leaderboard", LBSchema);

module.exports = Leaderboard;
