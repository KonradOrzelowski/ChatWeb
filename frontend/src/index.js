// index.js
const HOST_NAME = process.env.HOST_NAME;
console.log('HOST_NAME: ', HOST_NAME);


// Network requests
import './network_requests/new_chat_created.js';
import './network_requests/fetch_data.js';
import './network_requests/close_website.js';
import './network_requests/delete_post.js';
import './network_requests/save_conversation.js';
import './network_requests/update_conversation_title.js';

// Utilities
import './utils.js';
import './custom-alert.js';
import './send_to_server.js';

// Other scripts
import './load_list_of_conversations.js';
import './script.js';
import React from 'react';
import ReactDOM from 'react-dom';

// ... your other imports ...

function NavigationBar() {
    // TODO: Actually implement a navigation bar
    return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('navigation');
ReactDOM.createRoot(domNode).render(<NavigationBar />);

