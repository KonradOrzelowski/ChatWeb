const express = require('express');
const router = express.Router();

const { get_all_from_collection } = require('../ConversationsHandler');

router.get('/conversations/:id', async (req, res) => {
    var list_of_convs = await get_all_from_collection('ChatWebDB', 'conversations');
    const { id } = req.params;
    res.json({ response: list_of_convs[id] });
});

module.exports = router;