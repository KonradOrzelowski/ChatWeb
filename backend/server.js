const express = require('express');
const cors = require('cors');

/**
 * Requires the BotHandler module and imports the runInference function.
 * @requires BotHandler
 * @function
 */
const { runInference } = require('./BotHandler');

/**
 * Importing the list_of_titles and list_of_convs from ConversationsHandler module.
 * @module ConversationsHandler
 * @type {Object}
 * @property {Array} list_of_titles - The list of conversation titles.
 * @property {Array} list_of_convs - The list of conversations.
 */
const {list_of_titles, list_of_convs} = require('./ConversationsHandler');

// const configFilePath = path.join(__dirname, '..', 'config.json');





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

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



