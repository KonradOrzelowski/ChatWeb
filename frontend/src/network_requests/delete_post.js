import { loadConversationTitles } from "../load_list_of_conversations";
import { getUrl } from "../get_url"; 

export const deletePost = function(itemID){ 

    const endpointUrl = getUrl('delete_alert');
    const data = { message: itemID };

    fetch(endpointUrl, {
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