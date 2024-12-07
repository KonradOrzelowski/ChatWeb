const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const ConfigurationModule = require("../state_manager/messages_managaer");
const router = express.Router();
router.post("/refresh", async (req, res) => {
    
    const currentMgs = ConfigurationModule.getCurrentMgs();
    // genereted new id
    const newObjectId = new ObjectId();
    
    ConfigurationModule.setCurrentMgs([]);
    res.json({ response: true, newObjectId: newObjectId });
});
module.exports = router;