/* eslint-disable no-undef */
// __tests__/server.test.js

const { getUrl } = require("../get_url");

const request = require("supertest");
const HOST_NAME = process.env.HOST_NAME;



describe("GET/", () => {
    const url = getUrl("/");
    console.log(url);

    it("responds with 200", async () => {
        const response = await request(url);
        expect(response.statusCode).toBe(200);
    });
});


// describe("GET /lists/list_of_titles", () => {
//     it("responds with a list of titles", async () => {
//         const response = await request(`http://${HOST_NAME}:3000/lists/list_of_titles`).get("/");
//         expect(response.status).toBe(200);
//         expect(response.body.response).toBeDefined(); // Check if 'response' property exists
//         expect(Array.isArray(response.body.response)).toBe(true); // Check if 'response' is an array
//         expect(response.body.response.length).toBeGreaterThan(0); // Check if 'response' array is not empty
//     }, 120*1000);
// });
