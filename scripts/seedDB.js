const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/linguick");
const characterseed = [
  {
    // language_name: "Korean",
    // characters: " ㅏ,ㅑ ,ㅓ ,ㅕ ,ㅗ ,ㅛ, ㅜ ,ㅠ ,ㅡ ,ㅣ",
    // quiz_name:"Korean Alphabet",
    question: "ㅏ",
    choices: ["uu", "ya", "eu", "ah"],
    answer: "ah",
  },
  {
    question: "ㅑ",
    choices: ["o", "ah", "yeo", "ya"],
    answer: "ya",
  },
  {
    question: "ㅓ",
    choices: ["o", "eo", "uu", "ah"],
    answer: "eo",
  },
  {
    question: "ㅕ",
    choices: ["yeo", "yu", "eo", "o"],
    answer: "yeo",
  }, 
  {
    question: "ㅗ ",
    choices: ["ya", "uu", "oo", "o"],
    answer: "o",
  },
  {
    question: "ㅛ",
    choices: ["yeo", "oh", "yo", "ee"],
    answer: "yo",
  },
  {
    question: "ㅜ ",
    choices: ["uu", "ee", "ah", "oo"],
    answer: "uu",
  }, {
    question: "ㅠ",
    choices: ["yeo", "yu", "o", "a"],
    answer: "yu",
  }, {
    question: "ㅡ",
    choices: ["yo", "eu", "oo", "a"],
    answer: "eu",
  }, {
    question: "ㅣ",
    choices: ["ah", "ei", "eu", "li"],
    answer: "e",
  },
];
db.Question.remove({})
  .then(() => db.Question.collection.insertMany(characterseed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

//questions: ㄱ , ㄴ, ㄷ, ㄹ ,ㅁ, ㅂ, ㅅ, ㅇ, ㅈ ,ㅊ ,ㅋ, ㅌ ,ㅍ ,ㅎ, ㅏ ,ㅑ ,ㅓ ,ㅕ ,ㅗ ,ㅛ, ㅜ ,ㅠ ,ㅡ ,ㅣ
//answers:   g ,  n ,d ,r,  m ,b,  s, o,  c ,ch, k ,t , p ,h, a, ya ,eo ,yeo, o ,yo, uu,  yu , eu , e
