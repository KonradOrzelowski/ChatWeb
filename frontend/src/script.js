import {loadConversationTitles } from './load_list_of_conversations.js';
import {addDiv2Conversation} from './utils.js';
import {sendToServer} from './send_to_server.js';
import {closeWebsite} from './network_requests/close_website.js';

document.getElementById('chat-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addDiv2Conversation('You', event.target.value)

        sendToServer(event.target.value);

        document.getElementById('chat-input').value = "";

    }
});

// loadConversationTitles();

// window.addEventListener('beforeunload', function (event){
//     closeWebsite()
// });

