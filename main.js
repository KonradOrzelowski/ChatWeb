import { readFileSync } from 'fs';

// Read the JSON file
const rawConfig = readFileSync('config.json');
const config = JSON.parse(rawConfig);

const token = config.token;


import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
function askQuestion() {
    return new Promise(resolve => {
        rl.question('Me: ', answer => {
            resolve(answer);
        });
    });
}


import { HfInference } from "@huggingface/inference";

const inference = new HfInference(token);
async function runInference(text, generated_responses, past_user_inputs) {
    try {
        const result = await inference.conversational({
            model: "facebook/blenderbot-1B-distill",
            parameters: {},
            inputs: {
                generated_responses: generated_responses,
                past_user_inputs: past_user_inputs,
                text: text
            }
        });
        


        console.log(`Bot: ${result.generated_text}`);

        return result;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

var generated_responses = [];
var past_user_inputs = [];
async function mainLoop() {

    while (true) {

        var answer = await askQuestion();
        var result = await runInference(answer, generated_responses, past_user_inputs);

        generated_responses = result.conversation.generated_responses.slice(-2);
        past_user_inputs = result.conversation.past_user_inputs.slice(-2);
        
        if (answer === 'exit') {
            rl.close();
            break;
        }
    }

}

mainLoop();