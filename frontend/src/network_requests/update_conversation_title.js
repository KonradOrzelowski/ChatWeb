import { loadConversationTitles } from '../load_list_of_conversations.js';
import { getUrl } from '../get_url.js';
export const updateConversationTitle = function(itemID, newTitle){

    const endpointUrl = getUrl('update');

    const data = { updateTitle: true, itemID: itemID, newTitle: newTitle };
    console.log(data);
    fetch(endpointUrl, {
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