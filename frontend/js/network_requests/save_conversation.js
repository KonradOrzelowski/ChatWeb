function saveConversation() {


    const url = 'http://localhost:3000/save_conversation';
    const data = { saveConversation: true };

    console.log(data)

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