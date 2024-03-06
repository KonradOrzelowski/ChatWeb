const express = require('express');
const router = express.Router();


const { generateResponseFromModel } = require('../generate_response_from_model');
const ConfigurationModule = require('../state_manager/messages_managaer');

router.post('/message', async (req, res) => {
    try {
        const message = req.body.message;
        console.log(message);

        const asyncMessage = await generateResponseFromModel(message);

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

module.exports = router;