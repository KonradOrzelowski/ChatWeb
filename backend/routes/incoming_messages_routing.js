const express = require("express");
const router = express.Router();
const { MongoClient, ObjectId } = require("mongodb");

const { generateResponseFromModel } = require("../generate_response_from_model");
const ConfigurationModule = require("../state_manager/messages_managaer");

const { MongoDBHandler } = require('../mongoDB-handler');

router.post("/message", async (req, res) => {
    try {
        const conversationId = req.body.conversationId;
        const message = req.body.message;

        const serverResponse = await generateResponseFromModel(message);


        console.log(`conversationId: ${conversationId} \t message: ${message}`);
        console.log(`Received message: ${message}`);
        console.log(`Server response: ${serverResponse}`);

        ConfigurationModule.pushCurrentMgs({"speaker": "You", "message": message});
        ConfigurationModule.pushCurrentMgs({"speaker": "Bot", "message": serverResponse});

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