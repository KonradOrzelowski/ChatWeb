import { getUrl } from "../get_url";

export const sendNewChatSignal = function() {
    const endpointUrl = getUrl('refresh');

    fetch(endpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatCreated: true }),
    })
    .then(response => response.json())
    .then(data => console.log(`newObjectId: ${data.newObjectId}`))
    .catch((error) => {
        console.error('Error:', error);
    });
}