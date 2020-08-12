const db = require("../models");

// Defining methods for the User Model
module.exports = {
    findAll: function (req, res) {
        db.Leaderboard.find(req.query)
            .then(dbLB => {
                res.json(dbLB)
            })

            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Leaderboard.create(req.body)
            .then(dbLB => res.json(dbLB))
            .catch(err => res.status(422).json(err));
    },
};
