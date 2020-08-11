
const db = require("../models");

// Defining methods for the question Model
module.exports = {
    findAll: function (req, res) {
        db.Question.find(req.query)        
            .then(dbQuestions => {
                res.json(dbQuestions)
            })
          
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Question.findById(req.params.id)
            .then(dbQuestions => res.json(dbQuestions))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Question.create(req.body)
            .then(dbQuestions => res.json(dbQuestions))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Question.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbQuestions => res.json(dbQuestions))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Question.findById({ _id: req.params.id })
            .then(dbQuestions => dbQuestions.remove())
            .then(dbQuestions => res.json(dbQuestions))
            .catch(err => res.status(422).json(err));
    }
};
