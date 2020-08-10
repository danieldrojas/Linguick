const router = require("express").Router();
const questionController = require("../../controllers/questionController");

// Matches with "/api/questions"
router
    .route("/")
    .get(questionController.findAll)
    .post(questionController.create);

// Matches with "/api/question/:id"
router
    .route("/:id")
    .get(questionController.findById)
    .put(questionController.update)
    .delete(questionController.remove);

module.exports = router;
