export const sendNewChatSignal = function() {
    const HOST_NAME = process.env.HOST_NAME;
    const url = `https://${HOST_NAME}/refresh`;
    const data = { chatCreated: true };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
}