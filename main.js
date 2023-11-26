import { readFileSync } from 'fs';

// Read the JSON file
const rawConfig = readFileSync('config.json');
const config = JSON.parse(rawConfig);

// Access the token
const token = config.token;

// Now you can use the 'token' variable in your code
console.log(`Token: ${token}`);
