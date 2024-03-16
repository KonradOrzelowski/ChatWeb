const express = require('express');
const { MongoClient } = require('mongodb');

const ConfigurationModule = require('../state_manager/messages_managaer');
const getConfig = require('../get_config');

const router = express.Router();

router.post('/save_conversation', async (req, res) => {

    // Read configuration file
    const config = getConfig()
    const mongoUrl = config.url;

    // Get current messages
    const currentMgs = ConfigurationModule.getCurrentMgs();
    const title = currentMgs[0].message;
    const conversation = currentMgs;

    if(currentMgs.length <= 1){
        return;
    }

    const client = new MongoClient(mongoUrl);
    // Connect to MongoDB
    await client.connect();
    
    try {



        // Insert conversation into MongoDB
        const database = client.db("ChatWebDB");
        const collection = database.collection("conversations");
        const data = { title, conversation };
        const result = await collection.insertOne(data);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

        res.json({ response: true });
    } catch (error) {

        console.error('Error:', error);

    } finally {

        await client.close(); // Close MongoDB connection

    }
});

module.exports = router;
