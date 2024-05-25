const express = require("express");
const { MongoClient } = require("mongodb");

const ConfigurationModule = require("../state_manager/messages_managaer");


const router = express.Router();

router.post("/save_conversation", async (req, res) => {

    const mongoUrl = process.env.MONGODB_URL;

    
    const currentMgs = ConfigurationModule.getCurrentMgs();
    
    try{
        currentMgs[0].message;
    }catch(e){
        console.log("No messages to save");
        return;
    }

    
    const title = currentMgs[0].message;
    const conversation = currentMgs;

    const client = new MongoClient(mongoUrl);
    await client.connect();
    
    try {
        // Insert conversation into MongoDB
        const database = client.db("ChatWebDB");
        const collection = database.collection("conversations");
        const data = { title, conversation };
        const result = await collection.insertOne(data);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

        res.json({ response: true });

        ConfigurationModule.setCurrentMgs([]);
    } catch (error) {

        console.error("Error:", error);

    } finally {

        await client.close();

    }
});

module.exports = router;