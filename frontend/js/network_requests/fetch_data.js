async function fetchData(url) {
    const response = await fetch(url);
    const response_json = await response.json();
    return response_json
}