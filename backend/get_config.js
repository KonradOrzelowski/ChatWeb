const path = require('path');

const { readFileSync } = require('fs');

function getConfig(){
    const configPath = path.join(__dirname, 'config.json');

    const rawConfig = readFileSync(configPath);

    const config = JSON.parse(rawConfig);

    return config
}

module.exports.getConfig = getConfig;