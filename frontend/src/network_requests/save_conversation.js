function saveConversation() {
    const HOST_NAME = process.env.HOST_NAME;
    const url = `https://${HOST_NAME}/save_conversation`;
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
// Define the saveConversation function in the global scope
window.saveConversation = saveConversation;
