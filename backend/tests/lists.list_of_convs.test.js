const { getUrl } = require("../get_url");
const request = require("supertest");

describe("GET /lists/list_of_convs", () => {
    const url = getUrl("lists/list_of_convs");

    it("responds with a list of conversations", async () => {
        const response = await request(url).get('');
        expect(response.statusCode).toBe(200);
        expect(response.body.response).toBeDefined();
    });
});

const mongoose = require('mongoose');

const ConvSchema = new mongoose.Schema({
  _id: { type: String },
  initDate: { type: String },
  lastChangeDate: { type: String },
  title: { type: String },
  conversation: [
    {
      speaker: { type: String },
      message: { type: String }
    }
  ]
});

const Item = mongoose.model('Item', ConvSchema);

describe("GET /lists/list_of_convs: Check if the conversations have the correct type", () => {
    const url = getUrl("lists/list_of_convs");

    it("responds with a list of conversations", async () => {
        const response = await request(url).get('');
        expect(response.statusCode).toBe(200);
        expect(response.body.response).toBeDefined();

        const list_of_convs = response.body.response;
        expect(typeof list_of_convs === 'object' && list_of_convs !== null).toBe(true);

        for (const [key, value] of Object.entries(list_of_convs)) {
            expect(typeof key).toBe("string");

            const instance = new Item(value);
            const validationError = instance.validateSync(); 
            expect(validationError).toBeUndefined();
          }
    });
});