const express = require('express');
const cors = require('cors');
const { HfInference } = require("@huggingface/inference");
const { readFileSync } = require('fs');
const path = require('path');


const configFilePath = path.join(__dirname, '..', 'config.json');

const rawConfig = readFileSync(configFilePath);
const config = JSON.parse(rawConfig);

const token = config.token;

const inference = new HfInference(token);



const app = express();
app.use(express.json());
app.use(cors());
var generated_responses = [];
var past_user_inputs = [];
// An asynchronous function to simulate an asynchronous task
async function runInference(text) {
    const result = await inference.conversational({
        model: "facebook/blenderbot-1B-distill",
        parameters: {},
        inputs: {
            generated_responses: generated_responses,
            past_user_inputs: past_user_inputs,
            text: text
        }
    });

    generated_responses = result.conversation.generated_responses.slice(-2);
    past_user_inputs = result.conversation.past_user_inputs.slice(-2);

    return result.generated_text;
  }

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

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
