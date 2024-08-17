import React, { useState, useEffect } from 'react';

import './AddNewChat.css';

export function AddNewChat() {
    return (

        <a className="conversation-title new-chat">
            New chat
        <img src="assets/icons/text-document-add-icon.svg" alt="Icon description" style={{maxWidth: '1.25rem', maxHeight: '1.25rem'}} />
        </a>
    )
}