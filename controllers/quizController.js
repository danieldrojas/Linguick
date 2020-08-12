db = require("../models");

// Defining methods for the Quiz Model
module.exports = {
    findAll: function (req, res) {
        db.Quiz.find(req.query)
            .populate("questions")
            .then(dbQuizzes => {
                console.log("we hit the quiz: ", dbQuizzes)
                res.json(dbQuizzes)
            })

            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Quiz.findById(req.params.id)
            .then(dbQuizzes => res.json(dbQuizzes))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Quiz.create(req.body)
            .then(dbQuizzes => res.json(dbQuizzes))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Quiz.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbQuizzes => res.json(dbQuizzes))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Quiz.findById({ _id: req.params.id })
            .then(dbQuizzes => dbQuizzes.remove())
            .then(dbQuizzes => res.json(dbQuizzes))
            .catch(err => res.status(422).json(err));
    }
};
