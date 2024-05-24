export const fetchData = async function(url){
    const response = await fetch(url);
    const response_json = await response.json();
    return response_json
}

export const postData = async function(url, data){
    
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    return response
}

