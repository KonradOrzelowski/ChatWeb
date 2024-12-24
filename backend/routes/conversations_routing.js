const express = require("express");
const router = express.Router();

const { generateResponseFromModel } = require("../generate_response_from_model");

const { MongoDBHandler } = require('../mongoDB-handler');


class ConversationsRouting {
    constructor() {
        this.mongdbClass = new MongoDBHandler();
        
        this.router = express.Router();
        this.initializeRoutes();

        this.responseTemplate = {
            date: null,
            status: null,
            data: null,
            message: null,
            error:null
        };
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
        const { id } = req.params;

        const allConversations = await this.mongdbClass.get_all_from_collection();
        const conversation = allConversations[id];
        
        let responseToSend = { ...this.responseTemplate };

        responseToSend.date = this.getCentralEuropeanTime();
        responseToSend.status = 'success';
        responseToSend.data = conversation;

        res.json(responseToSend);
    }


    async deleteConversation(req, res){

        const conversationId = req.params.id;                
        await this.mongdbClass.deletePost(conversationId);

        let responseToSend = { ...this.responseTemplate };

        responseToSend.date = this.getCentralEuropeanTime();
        responseToSend.status = 'success';
        
        res.json(responseToSend);

    }
    async patchConversation(req, res){

        const conversationId = req.params.id;
        const message = req.body;
        const newTitle = message.newTitle;

        
        await this.mongdbClass.pathConversation(conversationId, newTitle);

        const allConversations = await this.mongdbClass.get_all_from_collection();
        const conversation = allConversations[conversationId];

        const isChanges = conversation.title === newTitle;

        const response = {
            conversationId: conversationId,
            titleChangeTo: newTitle,
            isChanges: isChanges
        }

        let responseToSend = { ...this.responseTemplate };

        if (isChanges == true) {
            responseToSend.date = this.getCentralEuropeanTime();
            responseToSend.status = 'success';
            responseToSend.data = response;

            return res.status(200).json(responseToSend);
        }
        if (isChanges == false) {
            responseToSend.date = this.getCentralEuropeanTime();
            responseToSend.status = 'error';
            responseToSend.data = response;
            responseToSend.message = "Failed to update the title due to an internal error.";
            responseToSend.error = "InternalServerError";

            return res.status(500).json(responseToSend);
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

        let responseToSend = { ...this.responseTemplate };
        responseToSend.date = this.getCentralEuropeanTime();
        responseToSend.status = 'success';
        responseToSend.data = {
            receivedMessage: message, serverResponse: serverResponse
        };

        res.json(responseToSend);
            
    }
    
}

module.exports = new ConversationsRouting().router;