let current_mgs = [];

function getCurrentMgs() {
    return current_mgs;
}

function pushCurrentMgs(newValue) {
    current_mgs.push(newValue);
}

module.exports = {
    getCurrentMgs,
    pushCurrentMgs,
};
