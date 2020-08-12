const router = require("express").Router();
const lbController = require("../../controllers/lbController");

// Matches with "/api/leaderboard"
router
    .route("/")
    .get(lbController.findAll)
    .post(lbController.create);

module.exports = router;
