const { getDataFromServer } = require("../src/network_requests/getDataFromServer");
const request = require("supertest");

describe("GET/", () => {
    const dataFromServer = new getDataFromServer()
    const id = process.env.CONV_ID;

    it("responds with 200", async () => {
        const response = await dataFromServer.callEndPoint("GET", ``);
        expect(response.status).toBe(200);
    });
});