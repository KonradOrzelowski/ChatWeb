class getDataFromServer{
    constructor() {       
        this.MODE = process.env.MODE;
        this.HOST_NAME = process.env.HOST_NAME;
        this.PORT = process.env.PORT;

        this.header = {
            'Content-Type': 'application/json',
        }
    }

    getUrl(apiString){
        if (this.MODE === 'development') {
            return `http://${this.HOST_NAME}:${this.PORT}/${apiString}`;
        } else {
            return `https://${this.HOST_NAME}/${apiString}`;
        }
    }
    
    async callEndPoint(method, apiString, data){
        const response = await fetch(getUrl(apiString), {
            method: method,
            headers: this.header,
            body: JSON.stringify(data)
        });

        return response

    }
}