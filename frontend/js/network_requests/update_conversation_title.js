function updateConversationTitle(itemID, newTitle) {

    const HOST_NAME = process.env.HOST_NAME;
    const url = `http://${HOST_NAME}:3000/update`;
    const data = { updateTitle: true, itemID: itemID, newTitle: newTitle };
    console.log(data);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming response is JSON
    })
    .then(data => {
        if(data.response == true){
            loadConversationTitles();
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
}