const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const { getDataFromServer } = require("../src/network_requests/getDataFromServer");

// Initialize AJV
const ajv = new Ajv();
addFormats(ajv);

// Define AJV Schemas
const titleSchema = {
    type: "object",
    properties: {
        date: { type: "string", format: "date-time" },
        data: {
            type: "object",
            properties: {
                _id: { type: "string" },
                initDate: { type: "string", format: "date-time" },
                lastChangeDate: { type: "string", format: "date-time" },
                title: { type: "string" },
                conversation: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            speaker: { type: "string" },
                            message: { type: "string" }
                        },
                        required: ["speaker", "message"]
                    }
                }
            },
            required: ["_id", "initDate", "lastChangeDate", "title", "conversation"]
        }
    },
    required: ["date", "data"]
};

const postSchema = {
    type: "object",
    properties: {
        date: { type: "string", format: "date-time" },
        data: {
            type: "object",
            properties: {
                receivedMessage: { type: "string" },
                serverResponse: { type: "string" }
            },
            required: ["receivedMessage", "serverResponse"]
        }
    },
    required: ["date", "data"]
};

// Compile schemas
const validateTitle = ajv.compile(titleSchema);
const validatePost = ajv.compile(postSchema);

describe("GET /conversations/:conversationId endpoint", () => {
    const dataFromServer = new getDataFromServer();
    const conversationId = process.env.CONV_ID;

    it("should respond with a 200 status code and have the correct JSON structure", async () => {
        const response = await dataFromServer.callEndPoint("GET", `conversations/${conversationId}`);
        
        expect(response.status).toBe(200);

        const jsonResponse = await response.json();

        expect(jsonResponse.data._id).toBe(conversationId);

        const isValid = validateTitle(jsonResponse);
        expect(isValid).toBe(true);
        if (!isValid) console.error(validateTitle.errors);
    });
});

describe("POST /conversations/:conversationId/messages endpoint", () => {
    const serverApi = new getDataFromServer();

    const conversationId = process.env.CONV_ID;
    const modifiedConversationId = conversationId.replace("e", "f");

    const testMessage = 'This is a test';

    const postData = { message: testMessage };

    it("should respond with a 200 status code and have the correct JSON structure", async () => {
        const response = await serverApi.callEndPoint("POST", `conversations/${modifiedConversationId}/messages`, postData);
        
        expect(response.status).toBe(200);

        const responseData = await response.json();

        const isValid = validatePost(responseData);
        expect(isValid).toBe(true);
        if (!isValid) console.error(validatePost.errors);
    });
});

describe("PATCH /conversations/:conversationId endpoint", () => {
    const serverApi = new getDataFromServer();

    const conversationId = process.env.CONV_ID;
    const modifiedConversationId = conversationId.replace("e", "f");

    const newTitle = 'This is a test';
    const patchData = { newTitle: newTitle };

    it("should respond with a 200 status code and return correct title", async () => {
        const response = await serverApi.callEndPoint("PATCH", `conversations/${modifiedConversationId}`, patchData);
        expect(response.status).toBe(200);

        const responseData = await response.json();

        expect(responseData.data.isChanges).toBe(true);
        expect(responseData.data.titleChangeTo).toBe(newTitle);
    });

});

describe("DELETE /conversations/:conversationId endpoint", () => {
    const serverApi = new getDataFromServer();

    const conversationId = process.env.CONV_ID;
    const modifiedConversationId = conversationId.replace("e", "a");

    const testMessage = 'This is a test';

    const postData = { message: testMessage };

    it("should respond with a 200 status code and have the correct JSON structure", async () => {
        const response = await serverApi.callEndPoint("POST", `conversations/${modifiedConversationId}/messages`, postData);
        expect(response.status).toBe(200);

        const responseData = await response.json();

        const isValid = validatePost(responseData);
        expect(isValid).toBe(true);
        if (!isValid) console.error(validatePost.errors);
    });

    const deleteData = { conversationId: modifiedConversationId };

    it("should respond with a 200 status code after successful deletion", async () => {
        const response = await serverApi.callEndPoint("DELETE", `conversations/${modifiedConversationId}`, deleteData);
        expect(response.status).toBe(200);
    });
});
