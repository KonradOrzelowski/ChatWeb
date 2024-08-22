import { getUrl } from "../get_url"; 

export const deletePost = function(itemID){ 
    try{
        const endpointUrl = getUrl('delete_alert');
        const data = { message: itemID };
    
        fetch(endpointUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok during deletePost');
            }
            return response.json();
        })
    }catch (error) {
        console.error('Error during deletePost:', error);
        throw error;
    }



}

