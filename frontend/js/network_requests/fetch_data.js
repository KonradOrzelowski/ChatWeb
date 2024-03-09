async function fetchData(url) {
    const response = await fetch(url);
    const response_json = await response.json();
    return response_json
}

async function postData(url, data) {
    
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    return response
}

