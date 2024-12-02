/* eslint-disable no-undef */
const request = require("supertest");

// describe("POST /message", () => {
//     it("responds with a string response", async () => {
//         const message = "Hello";
//         const HOST_NAME = process.env.HOST_NAME; // Load HOST_NAME from environment
//         const response = await request(`http://${HOST_NAME}:3000`).post("/message").send({ message });
//         const body_responce = response.body.response;

//         expect(response.status).toBe(200);
//         expect(typeof body_responce.receivedMessage).toBe("string");
//         expect(typeof body_responce.serverResponse).toBe("string");
//     }, 120*1000);
// });