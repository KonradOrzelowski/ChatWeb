import React, { useState, useEffect } from 'react';

import './AddNewChat.css';

import { sendNewChatSignal } from '../../network_requests/new_chat_created.js';
import { clearConversation } from '../../utils.js';

export function AddNewChat() {
    return (
        <div className="new-chat" onClick={() =>{
            sendNewChatSignal();
            clearConversation();
        }}>
            {/* New chat */}
            <img src="assets/icons/text-document-add-icon.svg"
                alt="Icon description"
            />
        </div>
    )
}