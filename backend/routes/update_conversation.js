const express = require("express");
const router = express.Router();

const { MongoClient, ObjectId } = require("mongodb");

router.post("/update", async (req, res) => {


    const mongoUrl = process.env.MONGODB_URL;
    const message = req.body;
    console.log(message);

    const client = new MongoClient(mongoUrl);

    await client.connect();

    try{
        const collection = await client.db("ChatWebDB").collection("conversations");

        const querry_result = await collection.updateOne(
            {  _id: new ObjectId(message.itemID) },
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