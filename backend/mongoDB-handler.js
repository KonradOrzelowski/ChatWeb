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

    async deletePost(conversationId){
        try{
            await this.client.connect();
            const collection = await this.client.db(this.databaseName).collection(this.collectionName);
            const query_result = await collection.deleteOne({ _id: new ObjectId(conversationId) });
            
            return query_result
        } catch (error) {
            console.error("Error deleting document:", error);
            throw error;
        } finally {
            await this.client.close();
        }
    }

    async pathConversation(conversationId, newTitle){
        await this.client.connect();

        const collection = await this.client.db(this.databaseName).collection(this.collectionName);

        const query_result = await collection.updateOne(
            {  _id: new ObjectId(conversationId) },
            { $set: { title: newTitle } 
            });

        return query_result
    }


    async addConversation(conversationId, newConversation){
        try {
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
        } catch (error) {
            console.error("Error retrieving conversations:", error);
        } finally {
            await this.client.close();
        }
    }

    async get_all_from_collection(){
        
        try {
            await this.client.connect();
            const conversations = await this.client.db(this.databaseName).collection(this.collectionName);
            const array_of_convs = await conversations.find({}).toArray();
            
    
            var dict_of_convs = {};
    
            array_of_convs.forEach((element) => {
                dict_of_convs[element._id.toString()] = element;
            });
        } catch (error) {
            console.error("Error retrieving conversations:", error);
        } finally {
            await this.client.close();
        }
    
        return(dict_of_convs);
        
    }
}
module.exports.MongoDBHandler = MongoDBHandler;