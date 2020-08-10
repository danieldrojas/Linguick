const router = require("express").Router();
const languageRoutes = require("./language");

// Post routes
router.use("/language", languageRoutes);

module.exports = router;
