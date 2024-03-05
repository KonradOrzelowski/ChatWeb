/**
 * Runs inference using the conversational model to generate a response based on the given text.
 * @param {string} text - The input text for the conversation.
 * @returns {string} - The generated response text.
 */
async function runInference(text) {
    let pipeline = (await import('@xenova/transformers')).pipeline;
    let poet = await pipeline('text2text-generation', 'Xenova/flan-alpaca-base');
    let result = await poet(text, { max_length: 128, do_sample: true, top_k: 10, });

    return result[0]['generated_text']
}

module.exports.runInference = runInference;