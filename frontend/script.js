const url = 'http://localhost:3000/message';

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

        document.getElementById('chatInput').value = "";

    }
});

function add_click_to_new_chat() {
    var new_chat = document.getElementsByClassName("new_chat")[0];

    new_chat.addEventListener("click", (event) => {

        clear_conversation();

    });
}

add_click_to_new_chat();






