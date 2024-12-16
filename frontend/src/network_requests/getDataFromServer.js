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

        return jsonResponse;

    }
}

// this.router.get("/conversations/:id", this.handleRequest(this.getConversation.bind(this)));
// this.router.delete("/conversations/:id", this.handleRequest(this.deleteConversation.bind(this)));
// this.router.patch("/conversations/:id", this.handleRequest(this.patchConversation.bind(this)));
// this.router.post("/conversations/:id/messages", this.handleRequest(this.postConversation.bind(this)));



async function main(){
    const dataFromServer = new getDataFromServer()

    const id = process.env.CONV_ID;
    // console.log(id)

    const getResponse = await dataFromServer.callEndPoint("GET", `conversations/${id}`);
    console.log(getResponse)

    const data = { updateTitle: true, itemID: id, newTitle: 'newTitle' };
    const patchResponse = await dataFromServer.callEndPoint("PATCH", `conversations/${id}`, data);
    console.log(patchResponse)
}
main();

