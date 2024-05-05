/* eslint-disable no-undef */
const path = require("path");

const { readFileSync } = require("fs");

function getConfig(){
    const configPath = path.join(__dirname, "config.json");

    const rawConfig = readFileSync(configPath);

    let config = JSON.parse(rawConfig);

    // Override the url property with the DATABASE_URL environment variable if it's available
    if (process.env.DATABASE_URL) {
        config.url = process.env.DATABASE_URL;
    }

    return config;
}

module.exports.getConfig = getConfig;