const request = require("supertest");
const { describe, it, expect } = require("mocha");

describe("POST /message", () => {
    it("responds with a string response", async () => {
        const message = "Hello";
        const response = await request("http://localhost:3000").post("/message").send({ message });
        const body_responce = response.body.response;

        expect(response.status).toBe(200);
        expect(typeof body_responce.receivedMessage).toBe("string");
        expect(typeof body_responce.serverResponse).toBe("string");
    }, 120*1000);
});

