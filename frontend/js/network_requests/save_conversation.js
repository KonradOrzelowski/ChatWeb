function saveConversation() {
    const url = `http://${HOST_NAME}:3000/save_conversation`;
    const data = { saveConversation: true };

    console.log(data)

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        response.json()
        loadConversationTitles();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
}