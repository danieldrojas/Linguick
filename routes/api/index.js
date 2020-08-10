const router = require("express").Router();
const questionRoutes = require("./question");
// const quizRoutes = require("./quiz");

// Post routes
router.use("/question", questionRoutes);
// router.use("/quiz", quizRoutes);

module.exports = router;
