// import './network_requests/new_chat_created.js';
// import './network_requests/fetch_data.js';
// import './network_requests/close_website.js';
// import './network_requests/delete_post.js';
// import './network_requests/save_conversation.js';
// import './network_requests/update_conversation_title.js';

import './utils.js';
import './custom-alert.js';
import './send_to_server.js';

import { loadConversationTitles } from './load_list_of_conversations.js';
document.getElementById('chat-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        add_div_to_conversation('You', event.target.value)

        sendToServer(event.target.value);

        

        document.getElementById('chat-input').value = "";

    }
});

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

