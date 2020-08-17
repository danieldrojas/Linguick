
module.exports = {
    translate: async function(req,res){
        const { Translate } = require("@google-cloud/translate").v2;
        const projectId = "Linguick";
        // Instantiates a client
        const translate = new Translate({ projectId });
        // The text to translate
        //const text = "ㄱ";
      
        // The target language
        const target = "en";
        // Translates some text into Russian
        const [translation] = await translate.translate(req.body.text, target);
        //console.log(translation)
        
        res.json(translation)
    }
}