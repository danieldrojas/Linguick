const express = require("express");
const mongoose = require("mongoose")
const path = require("path")
const routes = require("./routes");
const router = require("./routes");




var app = express();

const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use(express.static("client/build"));

app.use(routes)



mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/linguick",
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