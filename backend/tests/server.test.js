const { getUrl } = require("../get_url");
const request = require("supertest");

describe("GET/", () => {
    const url = getUrl("");


    it("responds with 200", async () => {
        const response = await request(url).get('');
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /lists/list_of_titles", () => {
    const url = getUrl("lists/list_of_titles");

    it("responds with a list of titles", async () => {
        const response = await request(url).get('');
        expect(response.statusCode).toBe(200);
        expect(response.body.response).toBeDefined(); // Check if 'response' property exists

        const list_of_titles = response.body.response;
    });
});

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  title: { type: String},
  _id: { type: String },
  lastChangeDate: { type: String }
});

const Item = mongoose.model('Item', ItemSchema);

describe("GET /lists/list_of_titles: Check if the titles have the correct type", () => {
    const url = getUrl("lists/list_of_titles");

    it("list_of_titles has correct type", async () => {
        const response = await request(url).get('');
        expect(response.statusCode).toBe(200);
        expect(response.body.response).toBeDefined();

        const list_of_titles = response.body.response;

        expect(Array.isArray(list_of_titles)).toBe(true);

        list_of_titles.forEach(item => {
            const instance = new Item(item);
            const validationError = instance.validateSync(); 
            expect(validationError).toBeUndefined();
          });
    });
});