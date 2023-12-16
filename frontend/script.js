const url = 'http://localhost:3000/message';

const fetchConversation = async () => {
    try {
        const response = await fetch('http://localhost:3000/convs/conv_1');
        const json = await response.json();
        addConversation(json);
    } catch (error) {
        console.error('Error:', error);
    }
};

const addConversation = (json) => {
    const conv = json.conversation;
    conv.forEach(element => {
        const divConv = document.createElement("div");
        divConv.classList.add(element.speaker, 'conversation_item');
        divConv.innerHTML = element.message;
        document.querySelector(".conversation").appendChild(divConv);
    });
};

const sendToServer = async (msg) => {
    const data = { message: msg };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const data = await response.json();
        const p = document.createElement("p");
        p.innerHTML = data.asyncMessage;
        document.querySelector(".conversation").appendChild(p);
    } catch (error) {
        console.error('Error:', error);
    }
};

document.getElementById('chatInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendToServer(event.target.value);
        const p = document.createElement("p");
        p.innerHTML = event.target.value;
        document.querySelector(".conversation").appendChild(p);
    }
});

fetchConversation();