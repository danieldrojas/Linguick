
const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

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

        console.log
        db.User.findById(req.params.id)
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
    },

//sign up
    create: function (req, res) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(422).json(err)
            } else {
                console.log(hash)
                console.log(req.body)
                const { username, email } = req.body;
                const password = hash;
                
            db.User.create({username, email, password})
                    .then(dbUsers => res.json(dbUsers))
                    .catch(err => res.status(422).json(err));
            }
        })
        
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

    //login 
    findByEmail: function (req, res) {
        db.User.findOne({ email: req.body.email }).then((dbUser) => {
            bcrypt
                .compare(req.body.password, dbUser.password)
                .then((result) => {

                    const privateKey = process.env.JWT_PASSWORD
                    jwt.sign({ email: req.body.email }, privateKey, function (err, token) {
                        console.log('this is my token: ',token)
                  
                    

                    console.log('result from bcrypt: ', result)

                    if (result) {
                        res.json({
                            error: false,
                            data: token,
                            message: "Found a match for user!"
                        })
                    } else {
                        res.json({
                            error: true,
                            message: "User Not Found!"
                        }).status(404)
                    }
                    })
                
            })         
           
        }).catch((error) => {
                res.status(422)
                    .json(error)
            })
    }
};
