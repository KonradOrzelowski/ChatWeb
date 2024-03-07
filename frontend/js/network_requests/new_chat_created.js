function sendNewChatSignal() {
    const url = 'http://localhost:3000/refresh'; // replace with your server's URL
    const data = { chatCreated: true }; // replace with the data you want to send

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