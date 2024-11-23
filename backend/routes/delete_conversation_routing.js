const express = require("express");
const router = express.Router();


const { MongoDBHandler } = require('../mongoDB-handler'); 

router.post("/delete_alert", async (req, res) => {

    const message = req.body.message;

    const mongdbClass = new MongoDBHandler();


    try{
        const querry_result = await mongdbClass.deletePost(message);

        console.log(querry_result);

        res.json({ response: true });
    }catch (error){
        console.error("Error processing message:", error);
        
        res.json({ response: false });
    }
});

module.exports = router;