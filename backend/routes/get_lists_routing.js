const express = require('express');
const router = express.Router();

const { get_all_from_collection, get_list_of_titles } = require('../ConversationsHandler');

router.get('/lists/list_of_titles', async (req, res) => {
    var list_of_convs = await get_all_from_collection('ChatWebDB', 'conversations');
    var list_of_titles = get_list_of_titles(list_of_convs);
    res.json({ response: list_of_titles });
});

router.get('/lists/list_of_convs', async (req, res) => {
    var list_of_convs = await get_all_from_collection('ChatWebDB', 'conversations');
    res.json({ response: list_of_convs });
});

module.exports = router;