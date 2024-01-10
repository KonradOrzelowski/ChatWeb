const express = require('express');
const cors = require('cors');

/**
 * Requires the BotHandler module and imports the runInference function.
 * @requires BotHandler
 * @function
 */
const { runInference } = require('./BotHandler');


const {get_all_from_collection, get_list_of_titles} = require('./ConversationsHandler');

async function main(){

  const list_of_convs = await get_all_from_collection('ChatWebDB', 'conversations');
  const list_of_titles = get_list_of_titles(list_of_convs);


  const app = express();
  app.use(express.json());
  app.use(cors());



  app.post('/message', async (req, res) => {
    try {
      const message = req.body.message;

      const asyncMessage = await runInference(message);

      console.log(`Received message: ${message}`);
      console.log(`Async message: ${asyncMessage}`);

      res.json({ receivedMessage: message, asyncMessage });
      
    } catch (error) {
      console.error('Error processing message:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  for(item in list_of_convs){
    app.get(`/conversations/conv_${item}`, (req, res) => {
      res.json({ response: list_of_convs[item] });
    });
  }

  app.get('/conversations/list_of_titles', (req, res) => {
    res.json({ response: list_of_titles });
  });

  app.get('/conversations/list_of_convs', (req, res) => {
    res.json({ response: list_of_convs });
  });

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

}

main();

