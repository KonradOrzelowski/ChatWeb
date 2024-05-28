import {loadConversationTitles } from './load_list_of_conversations.js';
import {clear_conversation, addDiv2Conversation} from './utils.js';
import {sendToServer} from './send_to_server.js';

document.getElementById('chat-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addDiv2Conversation('You', event.target.value)

        sendToServer(event.target.value);

        

        document.getElementById('chat-input').value = "";

    }
});
import {sendNewChatSignal} from './network_requests/new_chat_created.js';

function add_click_to_new_chat() {
    var new_chat = document.getElementsByClassName("new-chat")[0];

    new_chat.addEventListener("click", (event) => {

        sendNewChatSignal();
        clear_conversation();
        


    });
}

add_click_to_new_chat();
loadConversationTitles();

window.addEventListener('beforeunload', function (event){
    closeWebsite()
});

