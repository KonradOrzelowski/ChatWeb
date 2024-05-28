const express = require("express");
const { MongoClient } = require("mongodb");

const ConfigurationModule = require("../state_manager/messages_managaer");


const router = express.Router();

router.post("/refresh", async (req, res) => {

    
    const currentMgs = ConfigurationModule.getCurrentMgs();
    ConfigurationModule.setCurrentMgs([]);
    res.json({ response: true });
});

module.exports = router;