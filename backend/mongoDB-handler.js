const { MongoClient, ObjectId } = require("mongodb");

class MongoDBHandler{
    constructor() {
        this.mongoUrl = process.env.MONGODB_URL;

        this.client = new MongoClient(this.mongoUrl);

        this.databaseName = "ChatWebDB";
        this.collectionName = "conversations"

        this.getCentralEuropeanTime = () => {
            const now = new Date();
            return new Date(now.setHours(now.getHours() + 1));
        };
        
        this.conversationSchema = {
            _id: null,
            initDate: this.getCentralEuropeanTime(),
            lastChangeDate: this.getCentralEuropeanTime(),
            title: '',
            conversation: '',
        };
    }

    async deletePost(idToDelete){

        await this.client.connect();
        const collection = await this.client.db(this.databaseName).collection(this.collectionName);
        const querry_result = await collection.deleteOne({ _id: new ObjectId(idToDelete) });
        await this.client.close();
        
        return querry_result
    }


    async addConversation(conversationId, newConversation){
        await this.client.connect();

        const database = this.client.db(this.databaseName);
        const collection = database.collection(this.collectionName);
        
        const existingConversation = await collection.findOne({ _id: new ObjectId(conversationId) });
        if(existingConversation){
            const result = await collection.updateOne(
            { _id: new ObjectId(conversationId) },
            {
                $push: { conversation: { $each: newConversation } } ,
                $set: { lastChangeDate: this.getCentralEuropeanTime() }
            }
            );
            console.log(result)
        }else{

            const newEntry = { ...this.conversationSchema }; 
            newEntry._id = new ObjectId(conversationId);
            newEntry.title = newConversation[0]?.message;
            newEntry.conversation = newConversation;

            const result = await collection.insertOne(newEntry);
            console.log(`Results from inserting a new document: ${result}`)
        }
        await this.client.close();
    }

    async get_all_from_collection(){
        console.log("get_all_from_collection");
        
        try {
            await this.client.connect();
            const conversations = await this.client.db(this.databaseName).collection(this.collectionName);
            const array_of_convs = await conversations.find({}).toArray();
            await this.client.close();
    
            var dict_of_convs = {};
    
            array_of_convs.forEach((element) => {
                dict_of_convs[element._id.toString()] = element;
            });
        } catch (error) {
            console.error("Error retrieving conversations:", error);
        }
    
        return(dict_of_convs);
        
    }
}
module.exports.MongoDBHandler = MongoDBHandler;