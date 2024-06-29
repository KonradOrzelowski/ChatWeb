import { loadConversationTitles } from "../load_list_of_conversations";
import { getUrl } from "../get_url";
function saveConversation() {
    const endpointUrl = getUrl('save_conversation');

    fetch(endpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ saveConversation: true }),
    })
    .then(response => {
        response.json()
        loadConversationTitles();
        console.log('Mgs from fronend: Rocket returns successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
}
// Define the saveConversation function in the global scope
window.saveConversation = saveConversation;
