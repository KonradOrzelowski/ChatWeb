const express = require("express");
const router = express.Router();

const { generateResponseFromModel } = require("../generate_response_from_model");

const { MongoDBHandler } = require('../mongoDB-handler');


class ConversationsRouting {
    constructor() {
        this.mongdbClass = new MongoDBHandler();
        
        this.router = express.Router();
        this.initializeRoutes();
    }

    asyncErrorHandler = fn => (req, res, next) => {
        return Promise.resolve(fn(req, res, next)).catch(next);
    };

    logMethod(req, res) {
        console.log('Request Type:', req.method)
    }

    initializeRoutes() {
        this.router.get("/conversations/:id",
            this.asyncErrorHandler(async (req, res, next) => {
                this.logMethod(req, res);
                await this.getConversation(req, res);
            })
        );
        this.router.delete("/conversations/:id", this.asyncErrorHandler(this.deleteConversation.bind(this)));
        this.router.patch("/conversations/:id", this.asyncErrorHandler(this.patchConversation.bind(this)));
        this.router.post("/conversations/:id/messages", this.asyncErrorHandler(this.postConversation.bind(this)));
    }

    async getConversation(req, res){
        var list_of_convs = await this.mongdbClass.get_all_from_collection();
    
        const { id } = req.params;
        res.json({ response: list_of_convs[id] });
    }


    async deleteConversation(req, res){

        const conversationId = req.params.id;
        console.log(`Deleting conversation with id: ${conversationId}`);
                
        await this.mongdbClass.deletePost(conversationId);
    
        res.json({ response: true });

    }
    async patchConversation(req, res){

        const conversationId = req.params.id;
        const message = req.body;
        const newTitle = message.newTitle;

        
        await this.mongdbClass.pathConversation(conversationId, newTitle);
    
        res.json({ response: true });
    
        console.log("Response sent from update");

    }
    async postConversation(req, res){

        const conversationId = req.params.id;

        const message = req.body.message;
        const serverResponse = await generateResponseFromModel(message);
    
        let newConversation = [
            {"speaker" : "You", "message" : message},
            {"speaker" :" Bot", "message" : serverResponse}
        ]
    
        
        await this.mongdbClass.addConversation(conversationId, newConversation);
    
        res.json({ response:{receivedMessage: message, serverResponse: serverResponse} });
    
    }
    
}

module.exports = new ConversationsRouting().router;