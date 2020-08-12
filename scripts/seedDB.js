const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/linguick");
const characterseed = [
  {
    language_name: "Korean",
    quiz_name: "Korean Vowels",
    quiz_question: [
      {
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
      },
      {
        question: "ㅠ",
        choices: ["yeo", "yu", "o", "a"],
        answer: "yu",
      },
      {
        question: "ㅡ",
        choices: ["yo", "eu", "oo", "a"],
        answer: "eu",
      },
      {
        question: "ㅣ",
        choices: ["ah", "e", "eu", "li"],
        answer: "e",
      },
      {
        question: "ㄱ",
        choices: ["b", "g", "r", "j"],
        answer: "g",
      },
      {
        question: "ㄴ",
        choices: ["n", "r", "l", "t"],
        answer: "n",
      },
      {
        question: "ㄷ",
        choices: ["o", "r", "d", "c"],
        answer: "d",
      },
      {
        question: "ㄹ",
        choices: ["s", "f", "r", "z"],
        answer: "r",
      },
      {
        question: "ㅁ",
        choices: ["m", "y", "k", "g"],
        answer: "m",
      },
      {
        question: "ㅂ",
        choices: ["b", "q", "d", "j"],
        answer: "b",
      },
      {
        question: "ㅅ",
        choices: ["s", "h", "w", "v"],
        answer: "s",
      },
      {
        question: "ㅇ",
        choices: ["o", "v", "p", "z"],
        answer: "o",
      },

      {
        question: "ㅈ",
        choices: ["c", "s", "l", "j"],
        answer: "c",
      },

      {
        question: "ㅊ",
        choices: ["y", "ch", "r", "m"],
        answer: "ch",
      },
      {
        question: "ㅋ",
        choices: ["k", "w", "v", "x"],
        answer: "k",
      },
      {
        question: "ㅌ",
        choices: ["x", "t", "l", "f"],
        answer: "t",
      },
      {
        question: "ㅍ",
        choices: ["b", "r", "p", "t"],
        answer: "p",
      },
      {
        question: "ㅎ",
        choices: ["d", "p", "q", "h"],
        answer: "h",
      },
    ],
  },
  {
    language_name: "Korean",
    quiz_name: "Korean Consanent",
  }
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

// korean alphabet:consonants(could be separated out into diff quiz)
