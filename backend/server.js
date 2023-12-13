import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// An asynchronous function to simulate an asynchronous task
const generateMessageAsync = async (text, generated_responses, past_user_inputs) => {
    try {
        console.log(`Me: ${text}`);
        const result = await inference.conversational({
            model: "facebook/blenderbot-1B-distill",
            parameters: {},
            inputs: {
                generated_responses: generated_responses,
                past_user_inputs: past_user_inputs,
                text: text
            }
        });

        console.log(`Bot: ${result.generated_text}`);

        return result;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
};

app.post('/message', async (req, res) => {
  try {
    const message = req.body.message;


    const asyncMessage = await generateMessageAsync(message, [], []);

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
