import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json()); 
app.use(cors()); 


app.post('/message', (req, res) => {
    const message = req.body.message;
    console.log(`Received message: ${message}`);
    res.json({ receivedMessage: message });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});