const { MongoClient, ObjectId } = require("mongodb");

const express = require("express");
const router = express.Router();

const { generateResponseFromModel } = require("../generate_response_from_model");

const { MongoDBHandler } = require('../mongoDB-handler');

const asyncHandler = fn => (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
};


router.get("/conversations/:id", asyncHandler(async(req, res) => {
    const mongdbClass = new MongoDBHandler();
    var list_of_convs = await mongdbClass.get_all_from_collection();

    const { id } = req.params;
    res.json({ response: list_of_convs[id] });

}));

router.delete("/conversations/:id", asyncHandler(async(req, res) => {

    const conversationId = req.params.id;
    console.log(`Deleting conversation with id: ${conversationId}`);
    
    const mongdbClass = new MongoDBHandler();
    await mongdbClass.deletePost(conversationId);

    res.json({ response: true });

}));

router.patch("/conversations/:id", asyncHandler(async(req, res) => {

    const conversationId = req.params.id;
    const message = req.body;
    const newTitle = message.newTitle;

    const mongdbClass = new MongoDBHandler();
    await mongdbClass.pathConversation(conversationId, newTitle);

    res.json({ response: true });

    console.log("Response sent from update");


}));

router.post("/conversations/:id/messages", asyncHandler(async(req, res) => {


    const conversationId = req.params.id;

    const message = req.body.message;
    const serverResponse = await generateResponseFromModel(message);

    let newConversation = [
        {"speaker" : "You", "message" : message},
        {"speaker" :" Bot", "message" : serverResponse}
    ]

    const mongdbClass = new MongoDBHandler();
    await mongdbClass.addConversation(conversationId, newConversation);

    res.json({ response:{receivedMessage: message, serverResponse: serverResponse} });


}));

module.exports = router;