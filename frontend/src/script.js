import {addDiv2Conversation} from './utils.js';
import {sendToServer} from './send_to_server.js';

try{
    document.getElementById('chat-input').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addDiv2Conversation('You', event.target.value)
    
            sendToServer(event.target.value);
    
            document.getElementById('chat-input').value = "";
    
        }
    });
} catch (error) {
    console.log(error);
}
  


// loadConversationTitles();

// window.addEventListener('beforeunload', function (event){
//     closeWebsite()
// });

