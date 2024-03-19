/**
 * Runs inference using the conversational model to generate a response based on the given text.
 * @param {string} text - The input text for the conversation.
 * @returns {string} - The generated response text.
 */
async function generateResponseFromModel(text) {
    let transformersPipeline = (await import("@xenova/transformers")).pipeline;
    let textGenerator = await transformersPipeline("text2text-generation", "Xenova/flan-alpaca-base");
    let generatedResponse = await textGenerator(text, { max_length: 128, do_sample: true, top_k: 10, });

    return generatedResponse[0]["generated_text"];
}

module.exports.generateResponseFromModel = generateResponseFromModel;