const router = require("express").Router();
const translateController = require("../../controllers/translateController");

// /api/translate
router.route("/").post(translateController.translate)

// router.get("/", (req,res)=>{
//     const { Translate } = require("@google-cloud/translate").v2;
//     const projectId = "Linguick";
//     // Instantiates a client
//     const translate = new Translate({ projectId });
//     // The text to translate
//     const text = "ㄱ";
  
//     // The target language
//     const target = "en";
//     // Translates some text into Russian
//     const [translation] =  translate.translate(text, target);
//     console.log(translation)
    
//     return translation

// })


module.exports = router;