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
    
    async callEndPoint(method, apiString, data = null){

        const config = {
            method,
            headers: this.header,
            ...(data && { body: JSON.stringify(data) }), // If data is provided
        };
        const url = this.getUrl(apiString);

        const response = await fetch(url, config);
        const jsonResponse = await response.json();

        return jsonResponse.response;

    }
}