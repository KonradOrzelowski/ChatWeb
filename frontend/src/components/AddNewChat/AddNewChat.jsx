import React, { useState, useEffect } from 'react';

import './AddNewChat.css';

import { sendNewChatSignal } from '../../network_requests/new_chat_created.js';
import { clearConversation } from '../../utils.js';

import { useDarkMode } from '../../hooks/useDarkMode.js';

export function AddNewChat() {

    const isDarkMode = useDarkMode();

    return (
        <div className="new-chat" onClick={() =>{
            sendNewChatSignal();
            clearConversation();
        }}>
            <img
                src={isDarkMode ? "assets/icons/text-document-add-icon-white.svg" : "assets/icons/text-document-add-icon-black.svg"}
                alt="Icon description"
            />
        </div>
    );
}
