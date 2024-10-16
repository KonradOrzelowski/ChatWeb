export const closeWebsite = async function() {

    const HOST_NAME = process.env.HOST_NAME;
    const url = `https://${HOST_NAME}/is_closed`; // replace with your server's URL
    const data = { is_closed: true }; // replace with the data you want to send

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