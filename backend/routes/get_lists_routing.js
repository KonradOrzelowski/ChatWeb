const express = require("express");
const router = express.Router();

const { get_list_of_titles } = require("../ConversationsHandler");
const { MongoDBHandler } = require('../mongoDB-handler'); 

router.get("/lists/list_of_titles", async (req, res) => {
    try {
        const mongdbClass = new MongoDBHandler();
        var list_of_convs = await mongdbClass.get_all_from_collection();

        var list_of_titles = get_list_of_titles(list_of_convs);
        res.json({ response: list_of_titles });
    } catch (error) {
        res.status(500).send({ error: "An error occurred while getting list of titles" });
    }
});

router.get("/lists/list_of_convs", async (req, res) => {
    try {
        const mongdbClass = new MongoDBHandler();
        var list_of_convs = await mongdbClass.get_all_from_collection();
        
        res.json({ response: list_of_convs });
    } catch (error) {
        res.status(500).send({ error: "An error occurred while getting list of conversations" });
    }
});

module.exports = router;