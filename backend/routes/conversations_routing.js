const { MongoClient, ObjectId } = require("mongodb");

const express = require("express");
const router = express.Router();

const { get_all_from_collection } = require("../ConversationsHandler");
const { generateResponseFromModel } = require("../generate_response_from_model");

const { MongoDBHandler } = require('../mongoDB-handler');

router.get("/conversations/:id", async (req, res) => {

    try{

        const mongdbClass = new MongoDBHandler();
        var list_of_convs = await mongdbClass.get_all_from_collection();

        const { id } = req.params;
        res.json({ response: list_of_convs[id] });

    }catch (error){
        console.error(`Error while fetchin conversation ${id}: ${error}`);
    }

});

router.delete("/conversations/:id", async (req, res) => {

    try{
        const conversationId = req.params.id;
        console.log(`Deleting conversation with id: ${conversationId}`);
        
        const mongdbClass = new MongoDBHandler();
        await mongdbClass.deletePost(conversationId);

        res.json({ response: true });

    }catch (error){

        console.error("Error processing message:", error);
        res.json({ response: false });
    }

});

router.patch("/conversations/:id", async (req, res) => {

    try{
        const conversationId = req.params.id;
        const message = req.body;
        const newTitle = message.newTitle;

        const mongdbClass = new MongoDBHandler();
        await mongdbClass.pathConversation(conversationId, newTitle);

        res.json({ response: true });

        console.log("Response sended from update");
    }catch (error){
        
        console.error("Error processing message:", error);
        res.json({ response: false });
    }

});

router.post("/conversations/:id/messages", async (req, res) => {

    try {
        const conversationId = req.params.id;

        const message = req.body.message;
        const serverResponse = await generateResponseFromModel(message);

        let newConversation = [
            {"speaker" : "You", "message" : message},
            {"speaker" :" Bot", "message" : serverResponse}
        ]

        const mongdbClass = new MongoDBHandler();
        await mongdbClass.addConversation(conversationId, newConversation);

        res.json({ response:{receivedMessage: message, serverResponse: serverResponse} });

    } catch (error) {
        console.error("Error processing message:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;