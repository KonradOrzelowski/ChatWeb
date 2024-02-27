const express = require('express');
const cors = require('cors');

const { readFileSync } = require('fs');
const { MongoClient, ObjectId } = require('mongodb');

const { runInference } = require('./BotHandler');
const { get_all_from_collection, get_list_of_titles } = require('./ConversationsHandler');


const ConfigurationModule = require('./ConfigurationModule');
const routing = require('./routes/routing');


var current_mgs = [];

async function main(){

    var list_of_convs = await get_all_from_collection('ChatWebDB', 'conversations');
    var list_of_titles = get_list_of_titles(list_of_convs);

    const app = express();
    app.use(express.json());

    // app.use(cors({ origin: 'http://localhost:3000/delete_alert' }));
    app.use(cors());
    
    app.use(routing);



    app.post('/message', async (req, res) => {
        try {
            const message = req.body.message;

            const asyncMessage = await runInference(message);


            console.log(`Received message: ${message}`);
            console.log(`Async message: ${asyncMessage}`);

            ConfigurationModule.pushCurrentMgs({"speaker": "You", "message": message});
            ConfigurationModule.pushCurrentMgs({"speaker": "Bot", "message": asyncMessage});

            res.json({ receivedMessage: message, asyncMessage });

        } catch (error) {
            console.error('Error processing message:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    app.get('/conversations/:id', (req, res) => {
        const { id } = req.params;
        res.json({ response: list_of_convs[id] });
    });

    app.get('/lists/list_of_titles', (req, res) => {
        res.json({ response: list_of_titles });
    });

    app.get('/lists/list_of_convs', (req, res) => {
        res.json({ response: list_of_convs });
    });



    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });


    app.post('/delete_alert', async (req, res) => {
        const rawConfig = readFileSync('config.json');
        const config = JSON.parse(rawConfig);

        const mongoUrl = config.url;
        const message = req.body.message;

        const client = new MongoClient(mongoUrl);
        await client.connect();
        
        const conversations = await client.db('ChatWebDB').collection('conversations');
        const array_of_convs = await conversations.deleteOne({ _id: new ObjectId(message) });

        console.log(array_of_convs)

        await client.close()

        res.json({ response: '1' });
                
    });
}

main();

