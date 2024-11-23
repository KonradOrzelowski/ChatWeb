import React, { useState, useEffect } from 'react';

import './AddNewChat.css';

import { sendNewChatSignal } from '../../network_requests/new_chat_created.js';
import { clearConversation } from '../../utils.js';

import { useDarkMode } from '../../hooks/useDarkMode.js';
import { disableTransition } from '../../hooks/disableTransition.js';

export function AddNewChat() {

    const isDarkMode = useDarkMode();
    const isDisableTransition = disableTransition(isDarkMode);

    return (
        // className={disableTransition ? 'no-transition' : ''}
        
        <div
            className={`${isDisableTransition ? 'no-transition' : ''} new-chat`}
            onClick={ async () =>{
                sendNewChatSignal();
                clearConversation();
            }}
        >
            <img
                src={isDarkMode ? "assets/icons/text-document-add-icon-white.svg" : "assets/icons/text-document-add-icon-black.svg"}
                alt="Icon description"
                
            />
        </div>
    );
}
