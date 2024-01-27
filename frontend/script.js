document.getElementById('chat-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        add_div_to_conversation('You', event.target.value)

        sendToServer(event.target.value);

        

        document.getElementById('chat-input').value = "";

    }
});

// localhost = 'http://localhost:3000/conversations/conv_0';
function sendNewChatSignal() {
    const url = 'http://localhost:3000/refresh'; // replace with your server's URL
    const data = { chatCreated: true }; // replace with the data you want to send

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
}

function add_click_to_new_chat() {
    var new_chat = document.getElementsByClassName("new_chat")[0];

    new_chat.addEventListener("click", (event) => {

        sendNewChatSignal();
        clear_conversation();
        


    });
}

add_click_to_new_chat();


window.addEventListener('beforeunload', function (event){
    const url = 'http://localhost:3000/is_closed'; // replace with your server's URL
    const data = { is_closed: true }; // replace with the data you want to send

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
});




