const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const { runInference } = require('./BotHandler');
const { get_all_from_collection, get_list_of_titles } = require('./ConversationsHandler');

const routing = require('./routes/routing');

var current_mgs = [];

async function main(){

  var list_of_convs = await get_all_from_collection('ChatWebDB', 'conversations');
  var list_of_titles = get_list_of_titles(list_of_convs);

  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(routing);

  

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



  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

}

main();

