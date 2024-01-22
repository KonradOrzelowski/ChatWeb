const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
/**
 * Requires the BotHandler module and imports the runInference function.
 * @requires BotHandler
 * @function
 */
const { runInference } = require('./BotHandler');


const {get_all_from_collection, get_list_of_titles, url} = require('./ConversationsHandler');
var current_mgs = [];
async function main(){

  var list_of_convs = await get_all_from_collection('ChatWebDB', 'conversations');
  var list_of_titles = get_list_of_titles(list_of_convs);

  const app = express();
  app.use(express.json());
  app.use(cors());


  

  app.post('/message', async (req, res) => {
    try {
      const message = req.body.message;

      const asyncMessage = await runInference(message);


      console.log(`Received message: ${message}`);
      console.log(`Async message: ${asyncMessage}`);

      current_mgs.push({"speaker": "You", "message": message});
      current_mgs.push({"speaker": "Bot", "message": asyncMessage});

      res.json({ receivedMessage: message, asyncMessage });
      
    } catch (error) {
      console.error('Error processing message:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.get('/conversations/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.json({ response: list_of_convs[id] });
});

  app.get('/lists/list_of_titles', (req, res) => {
    res.json({ response: list_of_titles });
  });

  app.get('/lists/list_of_convs', (req, res) => {
    res.json({ response: list_of_convs });
  });

  app.post('/refresh', async (req, res) => {
    res.json({ response: current_mgs });

    if(current_mgs.length > 1){
      const title = current_mgs[0].message;
      const conversation = current_mgs;
      const client = new MongoClient(url);
      try {
        const data = { title, conversation };

            // Connect to the "insertDB" database and access its "haiku" collection
        const database = client.db("ChatWebDB");
        const collection = database.collection("conversations");

        const result = await collection.insertOne(data);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        
        list_of_convs = await get_all_from_collection('ChatWebDB', 'conversations');
        list_of_titles = get_list_of_titles(list_of_convs);
      }catch (error) {
        console.error('Error:', error);
      }
       finally {
        // Close the MongoDB client connection
        await client.close();
      }
    }

  });


app.post('/is_closed', (req, res) => {
    const { is_closed } = req.body;
    if(is_closed){
      console.log('ChatWeb is closed');
    }else{
      console.log(`Incomming message from /is_closed: ${is_closed}`);
    }
    
});

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

}

main();

