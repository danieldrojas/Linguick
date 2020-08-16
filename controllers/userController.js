const jsw = require('jsonwebtoken')
const db = require("../models");

// Defining methods for the User Model
module.exports = {
    findAll: function (req, res) {
        db.User.find(req.query)
            .then(dbUsers => {
                res.json(dbUsers)
            })

            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User.create(req.body)
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then(dbUsers => dbUsers.remove())
            .then(dbUsers => res.json(dbUsers))
      
            .catch(err => res.status(422).json(err));
    },
    findByEmail: function (req, res) {
        console.log("this is wail from login form: ",req.body)
        db.User.findOne({ email: req.body.email }).then((foundUser) => {
            console.log("email found", typeof foundUser.email)
            console.log("email sent frontend", typeof req.body.email)
            if (foundUser.password === req.body.password) {           
                res.json({
                    error: false,
                    data: foundUser,
                    message: "Successfully authenticated user."
                })
            } else {
                res.json({
                    error: true,
                    data: null,
                    message: "Unable to authenticate user. Please try again."
                })
            .status(401)
            }           
        }).catch((err) => {
            console.log(err)
        })
    }
};
