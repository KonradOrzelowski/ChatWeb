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
    getCentralEuropeanTime = () => {
        const now = new Date();
        return new Date(now.setHours(now.getHours() + 1));
    };
    asyncErrorHandler = fn => (req, res, next) => {
        return Promise.resolve(fn(req, res, next)).catch(next);
    };

    logMethod(req, res, handler) {
        console.log(`[${req.method}] ${req.originalUrl} - Function: ${handler.name}`);
    }

    logErrorMethod(req, res, handler, error) {
        console.log(`[${req.method}] ${req.originalUrl} - Function: ${handler.name} - ${error}`);
    }

    responseMaker(endPointResponse){
        return {
            date: this.getCentralEuropeanTime(),
            response: endPointResponse
        }
    }

    handleRequest(handler){
        return async (req, res, next) => {
            this.logMethod(req, res, handler);
            try {
                await handler(req, res, next);
            } catch (error) {
                this.logErrorMethod(req, res, next, error)
                next(error);
            }
        };
    };
    
    initializeRoutes() {
        this.router.get("/conversations/:id", this.handleRequest(this.getConversation.bind(this)));
        this.router.delete("/conversations/:id", this.handleRequest(this.deleteConversation.bind(this)));
        this.router.patch("/conversations/:id", this.handleRequest(this.patchConversation.bind(this)));
        this.router.post("/conversations/:id/messages", this.handleRequest(this.postConversation.bind(this)));
    }

    async getConversation(req, res){
        var list_of_convs = await this.mongdbClass.get_all_from_collection();
    
        const { id } = req.params;

        // this.responseMaker(list_of_convs[id]) 
        res.json(this.responseMaker(list_of_convs[id]) );
    }


    async deleteConversation(req, res){

        const conversationId = req.params.id;                
        await this.mongdbClass.deletePost(conversationId);
        
        res.json(this.responseMaker({response: true}));

    }
    async patchConversation(req, res){

        const conversationId = req.params.id;
        const message = req.body;
        const newTitle = message.newTitle;

        
        await this.mongdbClass.pathConversation(conversationId, newTitle);

        const list_of_convs = await this.mongdbClass.get_all_from_collection();
        const conversation = list_of_convs[conversationId];

        const isChanges = conversation.title === newTitle;

        const response = {
            conversationId: conversationId,
            titleChangeTo: newTitle,
            isChanges: isChanges
        }

        // Failed to update
        if (isChanges == true) {
            return res.status(200).json(this.responseMaker(response));
        }
        if (isChanges == false) {
            return res.status(500).json(this.responseMaker(
            ...(response && {
                message: "Failed to update the title due to an internal error.",
                error: "InternalServerError"
            })));
          }



        
        
        res.json(this.responseMaker({response: conversation.title === newTitle}));

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
    
        res.json(this.responseMaker({
            receivedMessage: message, serverResponse: serverResponse
        }));
    
    }
    
}

module.exports = new ConversationsRouting().router;