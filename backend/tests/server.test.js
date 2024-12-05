/* eslint-disable no-undef */
// __tests__/server.test.js

const { getUrl } = require("../get_url");

const request = require("supertest");

// describe("GET/", () => {
//     const url = getUrl("");
//     console.log(url);

//     it("responds with 200", async () => {
//         const response = await request(url).get('');
//         expect(response.statusCode).toBe(200);
//     });
// });



const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  title: { type: String},
  _id: { type: String },
  lastChangeDate: { type: String }
});

const Item = mongoose.model('Item', ItemSchema);

describe("GET /lists/list_of_titles", () => {
    const url = getUrl("lists/list_of_titles");
    console.log(url);
    it("responds with a list of titles", async () => {
        const response = await request(url).get('');
        expect(response.statusCode).toBe(200);
        expect(response.body.response).toBeDefined(); // Check if 'response' property exists

        const list_of_titles = response.body.response;
    });
});
