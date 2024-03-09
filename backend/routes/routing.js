const express = require('express');
const router = express.Router();

const ConfigurationModule = require('../state_manager/messages_managaer');

const { MongoClient } = require('mongodb');
const { readFileSync } = require('fs');

const rawConfig = readFileSync('config.json');
const config = JSON.parse(rawConfig);



router.post('/refresh', async (req, res) => {
    current_mgs = ConfigurationModule.getCurrentMgs();
    console.log('Chat is refreshed')

    if(current_mgs.length > 1){
        const title = current_mgs[0].message;
        const conversation = current_mgs;
        const client = new MongoClient(config.url);
        try {
            const data = { title, conversation };

            const database = client.db("ChatWebDB");
            const collection = database.collection("conversations");

            const result = await collection.insertOne(data);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);

            // list_of_convs = await get_all_from_collection('ChatWebDB', 'conversations');
            // list_of_titles = get_list_of_titles(list_of_convs);
        }catch (error) {
            console.error('Error:', error);
        }
        finally {
        await client.close();
        }
    }

});


router.post('/is_closed', (req, res) => {
    const { is_closed } = req.body;
    if(is_closed){
        console.log('ChatWeb is closed');
    }else{
        console.log(`Incomming message from /is_closed: ${is_closed}`);
    }

});

module.exports = router;