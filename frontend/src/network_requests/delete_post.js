import { getUrl } from "../get_url"; 

export const deletePost = function(itemID){ 
    try{
        const endpointUrl = getUrl(`conversations/${itemID}`);
        console.log(endpointUrl);
        fetch(endpointUrl, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
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

