// const url = 'http://localhost:3000/message';

// const fetchConversation = async () => {
//     try {
//         const response = await fetch('http://localhost:3000/convs/conv_1');
//         const json = await response.json();
//         addConversation(json);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };



// const addConversation = (json) => {
//     const conv = json.conversation;
//     conv.forEach(element => {

//         add_div_to_conversation(element.speaker, element.message)

//     });
// };

const sendToServer = async (msg) => {
    let data = { message: msg };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        data = await response.json();
        add_div_to_conversation("ChatBot", data.asyncMessage)

    } catch (error) {
        console.error('Error:', error);
    }
};

document.getElementById('chatInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendToServer(event.target.value);

        add_div_to_conversation('You', event.target.value)

    }
});

function add_click_to_new_chat() {
    var new_chat = document.getElementsByClassName("new_chat")[0];

    new_chat.addEventListener("click", (event) => {

        clear_conversation();

    });
}

add_click_to_new_chat();






