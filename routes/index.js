const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
// /client/build / index.html
// If no API routes are hit, send the React app



module.exports = router;
