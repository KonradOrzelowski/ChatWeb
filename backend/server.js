const express = require('express');
const cors = require('cors');




const routing = require('./routes/routing');

const getListsRouting = require('./routes/get_lists_routing');
const deleteConversationRouting = require('./routes/delete_conversation_routing');
const conversationsRouting = require('./routes/conversations_routing');
const incomingMessagesRouting = require('./routes/incoming_messages_routing');



async function main(){

    const app = express();
    app.use(express.json());

    app.use(cors());
    app.use(routing);
    app.use(getListsRouting);
    app.use(deleteConversationRouting);
    app.use(conversationsRouting);
    app.use(incomingMessagesRouting);
    

    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });



}

main();

