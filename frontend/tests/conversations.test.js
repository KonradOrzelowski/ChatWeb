const { getDataFromServer } = require("../src/network_requests/getDataFromServer");
const request = require("supertest");

const mongoose = require('mongoose');
const TitleSchema = {
    date: { type: String, required: true },
    response: {
        type: {
            _id: { type: String, required: true },
            initDate: { type: String, required: true },
            lastChangeDate: { type: String, required: true },
            title: { type: String, required: true },
            conversation: [{
                speaker: { type: String, required: true },
                message: { type: String, required: true }
            }]
        }
    }
};

const Item = mongoose.model('Item', TitleSchema);


describe("GET /conversations/:id endpoint", () => {
    const dataFromServer = new getDataFromServer();
    const id = process.env.CONV_ID;

    it("should respond with a 200 status code and have the correct JSON structure", async () => {
        const response = await dataFromServer.callEndPoint("GET", `conversations/${id}`);
        expect(response.status).toBe(200);

        const jsonResponse = await response.json();

        expect(jsonResponse.response._id).toBe(id);

        const instance = new Item(jsonResponse);
        const validationError = instance.validateSync(); 
        expect(validationError).toBeUndefined();

    });
});

const postSchema = {
    date: { type: String, required: true },
    response: {
        type: {
            receivedMessage: { type: String, required: true },
            serverResponse: { type: String, required: true }
        }
    }
};

const ConversationMessage = mongoose.model('ConversationMessage', postSchema);

describe.skip("POST /conversations/:id/messages endpoint", () => {
    const serverApi = new getDataFromServer();

    const conversationId = process.env.CONV_ID;
    const modifiedConversationId = conversationId.replace("e", "f");

    const testMessage = 'This is a test';

    const postData = { message: testMessage };

    it("should respond with a 200 status code and have the correct JSON structure", async () => {
        const response = await serverApi.callEndPoint("POST", `conversations/${modifiedConversationId}/messages`, postData);
        expect(response.status).toBe(200);

        const responseData = await response.json();

        const messageInstance = new ConversationMessage(responseData);
        const validationError = messageInstance.validateSync();
        expect(validationError).toBeUndefined();
    });
});


describe("PATCH /conversations/:id/messages endpoint", () => {
    const serverApi = new getDataFromServer();

    const conversationId = process.env.CONV_ID;
    const modifiedConversationId = conversationId.replace("e", "f");

    const newTitle = 'This is a test';
    const patchData = { newTitle: newTitle };

    it("should respond with a 200 status code and return correct title", async () => {
        const response = await serverApi.callEndPoint("PATCH", `conversations/${modifiedConversationId}`, patchData);
        expect(response.status).toBe(200);

        const responseData = await response.json();

        expect(responseData.response.isChanges).toBe(true);
        expect(responseData.response.titleChangeTo).toBe(newTitle);

    });

});

describe("DELETE /conversations/:id/messages endpoint", () => {
    const serverApi = new getDataFromServer();

    const conversationId = process.env.CONV_ID;
    const modifiedConversationId = conversationId.replace("e", "a");

    const testMessage = 'This is a test';

    const postData = { message: testMessage };

    it("should respond with a 200 status code and have the correct JSON structure", async () => {
        const response = await serverApi.callEndPoint("POST", `conversations/${modifiedConversationId}/messages`, postData);
        expect(response.status).toBe(200);

        const responseData = await response.json();

        const messageInstance = new ConversationMessage(responseData);
        const validationError = messageInstance.validateSync();
        expect(validationError).toBeUndefined();
    });

    const deleteData = { id: modifiedConversationId };

    it("should respond with a 200 status code after successful deletion", async () => {
        const response = await serverApi.callEndPoint("DELETE", `conversations/${modifiedConversationId}`, deleteData);
        expect(response.status).toBe(200);
    });
});