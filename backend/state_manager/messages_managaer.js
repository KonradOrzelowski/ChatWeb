let current_mgs = [];

function getCurrentMgs() {
    return current_mgs;
}

function pushCurrentMgs(newValue) {
    current_mgs.push(newValue);
}

function setCurrentMgs(newValue) {
    current_mgs = newValue;
}

module.exports = {
    getCurrentMgs,
    setCurrentMgs,
    pushCurrentMgs,
};