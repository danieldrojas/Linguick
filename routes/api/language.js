const router = require("express").Router();
const languageController = require("../../controllers/languageController");

// Matches with "/api/language"
router
    .route("/")
    .get(languageController.findAll)
    .post(languageController.create);

// Matches with "/api/language/:id"
router
    .route("/:id")
    .get(languageController.findById)
    .put(languageController.update)
    .delete(languageController.remove);

module.exports = router;
