import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// An asynchronous function to simulate an asynchronous task
const generateMessageAsync = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Async message generated! ${data}`);
    }, 1000);
  });
};

app.post('/message', async (req, res) => {
  try {
    const message = req.body.message;

    // Simulate an asynchronous task (replace with your actual async logic)
    const asyncMessage = await generateMessageAsync(2);

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
