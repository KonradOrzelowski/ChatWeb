function deletePost(itemID){
    const HOST_NAME = process.env.HOST_NAME;
    const uurl = `http://${HOST_NAME}:3000/delete_alert`;
    const data = { message: itemID };

    fetch(uurl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            loadConversationTitles();
            console.log('Mgs from server: Rocket launched successfully!');
        } else {
            console.error('Failed to launched the rocket. Status:', response.status);
        }
        console.log(response.json())
        
    })
    .catch(error => {
        console.error('Error occurred while launching the rocket:', error);
    });

}