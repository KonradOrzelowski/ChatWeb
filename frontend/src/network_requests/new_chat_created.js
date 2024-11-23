import { getUrl } from "../get_url";
import { CurrentIdProvider } from '../contexts/currentIdContext';

export const sendNewChatSignal = async () => {

    try{
        const endpointUrl = getUrl('refresh');
        const response = await fetch(endpointUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ chatCreated: true }),
        })
    
        const data = await response.json();
    
        CurrentIdProvider.setCurrentId(data.newObjectId)
    
        console.log(`newObjectId: ${data.newObjectId}`)
        
    } catch (error) {
        console.error('Error sending new chat signal:', error);
    }



}