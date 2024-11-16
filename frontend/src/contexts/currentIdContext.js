class CurrentIdHolder {
    constructor(){
        this.currentId = NaN
    }

    setCurrentId(currentId){
        this.currentId = currentId;
    }

    getCurrentId(){
        return this.currentId
    }
}

const CurrentIdProvider = new CurrentIdHolder();

module.exports = {
    CurrentIdProvider
};