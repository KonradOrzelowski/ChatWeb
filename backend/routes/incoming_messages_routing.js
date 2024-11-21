const express = require("express");
const router = express.Router();
const { MongoClient, ObjectId } = require("mongodb");

const { generateResponseFromModel } = require("../generate_response_from_model");
const ConfigurationModule = require("../state_manager/messages_managaer");

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
        // Insert conversation into MongoDB
        const mongoUrl = process.env.MONGODB_URL;
        const client = new MongoClient(mongoUrl);
        await client.connect();

        const database = client.db("ChatWebDB");
        const collection = database.collection("conversations");
        
        const existingConversation = await collection.findOne({ _id: new ObjectId(conversationId) });
        if(existingConversation){
            const result = await collection.updateOne(
                { _id: new ObjectId(conversationId) },
                { $push: { conversation: { $each: newConversation } } }
              );
            console.log(result)
        }else{
            const newId = new ObjectId(conversationId);
            const title = newConversation[0].message;
            const conversation = newConversation;

            const doc = {
                "_id": newId,
                "title": title,
                "conversation": conversation
            }

            const result = await collection.insertOne(doc);
            console.log(`Results from inserting a new document: ${result}`)
        }


        res.json({ response:{receivedMessage: message, serverResponse: serverResponse} });

    } catch (error) {
        console.error("Error processing message:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;