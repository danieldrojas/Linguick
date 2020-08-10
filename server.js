const express = require("express");
const mongoose = require("mongoose")
const path = require("path")
const routes = require("./routes");
const router = require("./routes");

// const gameController = require("./controllers/game")



var app = express();

const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.use(routes)

// app.get("/api/config", (req, res) => {
//     res.json({
//         success: true
//     });
// })


mongoose
    .connect(process.env.MONGOD_URI || "mongodb://localhost/gt-project3",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => {
        console.log("connected to the database TESTING ")
    })
    .catch((err) => {
        console.log("unable to connect to the database")
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`)
})