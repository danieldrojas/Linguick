
const db = require("../models");

// Defining methods for the postsController
module.exports = {
    findAll: function (req, res) {
        db.Language.find(req.query)
            .sort({ date: -1 })
            .then(dbLanguage => res.json(dbLanguage))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Language.findById(req.params.id)
            .then(dbLanguage => res.json(dbLanguage))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Language.create(req.body)
            .then(dbLanguage => res.json(dbLanguage))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Language.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbLanguage => res.json(dbLanguage))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Language.findById({ _id: req.params.id })
            .then(dbLanguage => dbLanguage.remove())
            .then(dbLanguage => res.json(dbLanguage))
            .catch(err => res.status(422).json(err));
    }
};
