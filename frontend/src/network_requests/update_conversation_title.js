import { getUrl } from '../get_url.js';

/**
 * Updates the title of a conversation.
 *
 * @param {string} itemID - The ID of the item to update.
 * @param {string} newTitle - The new title for the item.
 * @throws {Error} When the network response is not ok.
 */
export const updateConversationTitle = function(itemID, newTitle){
    const endpointUrl = getUrl(`conversations/${itemID}`);

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
    ;
}