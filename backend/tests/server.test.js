const { getUrl } = require("../get_url");
const request = require("supertest");

describe("GET/", () => {
    const url = getUrl("");


    it("responds with 200", async () => {
        const response = await request(url).get('');
        expect(response.statusCode).toBe(200);
    });
});