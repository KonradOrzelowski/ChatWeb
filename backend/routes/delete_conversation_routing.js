const express = require("express");
const router = express.Router();


const { MongoClient, ObjectId } = require("mongodb");

router.post("/delete_alert", async (req, res) => {
    const mongoUrl = process.env.MONGODB_URL
    const message = req.body.message;

    const client = new MongoClient(mongoUrl);

    await client.connect();

    try{
        
        const collection = await client.db("ChatWebDB").collection("conversations");
        const querry_result = await collection.deleteOne({ _id: new ObjectId(message) });

        console.log(querry_result);

        res.json({ response: true });
    }catch (error){
        console.error("Error processing message:", error);
        
        res.json({ response: false });
    }finally{
        await client.close();
    }   
});

module.exports = router;