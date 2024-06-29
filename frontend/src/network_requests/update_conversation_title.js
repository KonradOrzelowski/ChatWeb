import { loadConversationTitles } from '../load_list_of_conversations.js';

export const updateConversationTitle = function(itemID, newTitle){ 
    const MODE = process.env.MODE;
    const HOST_NAME = process.env.HOST_NAME;
    const PORT = process.env.PORT;
    console.log(MODE);

    if (MODE == 'development'){
        const url = `http://${HOST_NAME}:${PORT}/update`;
    }else{
        const url = `https://${HOST_NAME}/update`;
    }

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