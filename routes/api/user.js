const router = require("express").Router();
const userController = require("../../controllers/userController");
const { route } = require("./question");

// Matches with "/api/user"
    
// Matches with "/api/user/signup/:id"
router
    .route("/signup")
    // .get(userController.findAll)
    .post(userController.create)
    // .put(userController.update)
    // .delete(userController.remove);


router
    .route("/loggedin/:id")
    .get(userController.findById)

module.exports = router;
