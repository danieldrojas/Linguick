const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is required",
  },
  email: {
    type: String,
    trim: true,
    required: "Email address is required",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
  },
  quizzes_taken: [
    {
      score:{
        type:Number
      },
      quizName:{
        type:String
      }
    },
  ],
  total_score: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
