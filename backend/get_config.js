/* eslint-disable no-undef */
const path = require("path");

const { readFileSync } = require("fs");

function getConfig(){
    const configPath = path.join(__dirname, "config.json");

    const rawConfig = readFileSync(configPath);

    let config = JSON.parse(rawConfig);

    return config;
}

module.exports.getConfig = getConfig;