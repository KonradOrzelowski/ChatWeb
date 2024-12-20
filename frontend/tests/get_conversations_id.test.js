const { getDataFromServer } = require("../src/network_requests/getDataFromServer");
const request = require("supertest");

describe("GET/", () => {
    const dataFromServer = new getDataFromServer()
    const id = process.env.CONV_ID;

    it("responds with 200", async () => {
        const response = await dataFromServer.callEndPoint("GET", `conversations/${id}`);
        expect(response.status).toBe(200);
    });
});

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
