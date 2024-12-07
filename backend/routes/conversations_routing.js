const { MongoClient, ObjectId } = require("mongodb");

const express = require("express");
const router = express.Router();

const { get_all_from_collection } = require("../ConversationsHandler");

router.get("/conversations/:id", async (req, res) => {
    var list_of_convs = await get_all_from_collection("ChatWebDB", "conversations");
    const { id } = req.params;
    res.json({ response: list_of_convs[id] });
});

router.delete("/conversations/:id", async (req, res) => {
    const mongoUrl = process.env.MONGODB_URL;
    const idToDelete = req.params.id;
    
    const client = new MongoClient(mongoUrl);

    await client.connect();

    console.log(`Deleting conversation with id: ${idToDelete}`);

    try{
        const collection = await client.db("ChatWebDB").collection("conversations");

        const querry_result = await collection.deleteOne({ _id: new ObjectId(idToDelete) });
        console.log(querry_result);

        res.json({ response: true });

        console.log("Response sended from update");
    }catch (error){
        console.error("Error processing message:", error);
        
        res.json({ response: false });
    }finally{
        await client.close();
    }   

});

router.patch("/conversations/:id", async (req, res) => {
    const idToDelete = req.params.id;

    const mongoUrl = process.env.MONGODB_URL;
    const message = req.body;


    const client = new MongoClient(mongoUrl);

    await client.connect();

    try{
        const collection = await client.db("ChatWebDB").collection("conversations");

        const querry_result = await collection.updateOne(
            {  _id: new ObjectId(idToDelete) },
            { $set: { title: message.newTitle } 
            });
        console.log(querry_result);

        res.json({ response: true });

        console.log("Response sended from update");
    }catch (error){
        console.error("Error processing message:", error);
        
        res.json({ response: false });
    }finally{
        await client.close();
    }   

});


module.exports = router;