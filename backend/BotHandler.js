const { HfInference } = require("@huggingface/inference");
const { readFileSync } = require('fs');


const rawConfig = readFileSync('config.json');
const config = JSON.parse(rawConfig);

const token = config.token;

const inference = new HfInference(token);

var generated_responses = [];
var past_user_inputs = [];

/**
 * Runs inference using the conversational model to generate a response based on the given text.
 * @param {string} text - The input text for the conversation.
 * @returns {string} - The generated response text.
 */
async function runInference(text) {
    const result = await inference.conversational({
        model: "facebook/blenderbot-1B-distill",
        parameters: {},
        inputs: {
            generated_responses: generated_responses,
            past_user_inputs: past_user_inputs,
            text: text
        }
    });

    generated_responses = result.conversation.generated_responses.slice(-2);
    past_user_inputs = result.conversation.past_user_inputs.slice(-2);

    return result.generated_text;
}

module.exports.runInference = runInference;