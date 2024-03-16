const express = require('express');
const router = express.Router();

const ConfigurationModule = require('../state_manager/messages_managaer');

router.post('/message', async (req, res) => {
    currentMgs = ConfigurationModule.getCurrentMgs();

    const title = currentMgs[0].message;
    const conversation = currentMgs;
    const client = new MongoClient(config.url);

    try {

        const data = { title, conversation };

        const database = client.db("ChatWebDB");
        const collection = database.collection("conversations");

        const result = await collection.insertOne(data);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

    } catch (error) {
        console.error('Error:', error);
    }
    finally {
        await client.close();
    }
});

module.exports = router;