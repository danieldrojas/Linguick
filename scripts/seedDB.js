const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/linguick");
const characterseed = [
  {
    quiz_name: "Korean Vowels",
    questions: [
      { question: "ㅏ", choices: ["uu", "ya", "eu", "ah"], answer: "ah" },
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
    ],
  },
  {
    quiz_name: "Korean Consonants",
    questions: [
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
        choices: ["j", "s", "l", "t"],
        answer: "j",
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
    quiz_name: "Korean Syllables - Basic",
    questions: [
      {
        question: "비",
        choices: ["ba", "be", "heu", "joo"],
        answer: "be",
      },
      {
        question: "후",
        choices: ["huu", "ha", "hyeo", "hya"],
        answer: "huu",
      },
      {
        question: "소",
        choices: ["soo", "syu", "se", "suu"],
        answer: "soo",
      },
      {
        question: "자",
        choices: ["ja", "jyu", "jya", "jeo"],
        answer: "ja",
      },
      {
        question: "느",
        choices: ["neu", "leu", "le", "ne"],
        answer: "neu",
      },
      {
        question: "도",
        choices: ["doo", "cyo", "da", "cuu"],
        answer: "doo",
      },
      {
        question: "우",
        choices: ["uu", "oo", "eo", "eu"],
        answer: "uu",
      },
      {
        question: "머",
        choices: ["meo", "ma", "myu", "me"],
        answer: "meo",
      },
      {
        question: "캬",
        choices: ["kya", "kyeo", "ka", "kyu"],
        answer: "kya",
      },
      {
        question: "류",
        choices: ["ryu", "roo", "ruu", "ryeo"],
        answer: "ryu",
      },
      {
        question: "펴",
        choices: ["pya", "pyeo", "puu", "peu"],
        answer: "pyeo",
      },
      {
        question: "토",
        choices: ["eo", "to", "too", "te"],
        answer: "to",
      },
    ],
  },
  {
    quiz_name: "Korean Syllables - Advanced",
    questions: [
      {
        question: "날",
        choices: ["nar", "lar", "nyar", "lyar"],
        answer: "nar",
      },
      {
        question: "빅",
        choices: ["beg", "boog", "bag", "byag"],
        answer: "beg",
      },
      {
        question: "핟",
        choices: ["had", "hat", "hed", "ham"],
        answer: "had",
      },
      {
        question: "폴",
        choices: ["pool", "puul", "pooh", "peul"],
        answer: "pool",
      },
      {
        question: "즌",
        choices: ["jeun", "juun", "jan", "jyun"],
        answer: "jeun",
      },
      {
        question: "굼",
        choices: ["guum", "gyum", "geum", "gem"],
        answer: "guum",
      },
      {
        question: "뎤",
        choices: ["dyeok", "deok", "dyak", "duuk"],
        answer: "dyeok",
      },
      {
        question: "럇",
        choices: ["ryas", "ras", "reos", "soos"],
        answer: "rya",
      },
      {
        question: "섣",
        choices: ["seod", "seog", "seun", "sood"],
        answer: "seod",
      },
      {
        question: "칱",
        choices: ["chet", "cheot", "chuut", "chyut"],
        answer: "chet",
      },
    ],
  },
];
db.Quiz.remove({})
  .then(() => db.Quiz.collection.insertMany(characterseed))
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
