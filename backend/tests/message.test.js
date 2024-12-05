const { getUrl } = require("../get_url");
const request = require("supertest");

describe("POST /message", () => {
    const url = getUrl("message");

    it("responds with a response from model", async () => {
        const message = "Hello";
        const response = await request(url).post("").send({ message });
        expect(response.status).toBe(200);
        expect(response.body.response).toBeDefined();

        const body_responce = response.body.response;
        expect(body_responce.receivedMessage).toBeDefined();
        expect(body_responce.serverResponse).toBeDefined();

        expect(typeof body_responce.receivedMessage).toBe("string");
        expect(typeof body_responce.serverResponse).toBe("string");
    }, 120*1000);
});

