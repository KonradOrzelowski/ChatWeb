const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const { readFileSync } = require('fs');
const ConfigurationModule = require('../state_manager/messages_managaer');

const router = express.Router();

router.post('/save_conversation', async (req, res) => {

    // Read configuration file
    const configPath = path.join(__dirname, '..', 'config.json');
    const rawConfig = readFileSync(configPath);
    const config = JSON.parse(rawConfig);
    const mongoUrl = config.url;

    // Get current messages
    const currentMgs = ConfigurationModule.getCurrentMgs();
    const title = currentMgs[0].message;
    const conversation = currentMgs;

    if(currentMgs.length <= 1){
        return;
    }
    
    try {

        // Connect to MongoDB
        const client = new MongoClient(mongoUrl);
        await client.connect();

        // Insert conversation into MongoDB
        const database = client.db("ChatWebDB");
        const collection = database.collection("conversations");
        const data = { title, conversation };
        const result = await collection.insertOne(data);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

    } catch (error) {

        console.error('Error:', error);

    } finally {

        await client.close(); // Close MongoDB connection

    }
});

module.exports = router;
