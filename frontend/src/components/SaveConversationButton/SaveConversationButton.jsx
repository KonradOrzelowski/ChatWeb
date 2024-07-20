import React, { useState, useEffect } from 'react';

import './SaveConversationButton.css';
import { saveConversation } from '../../network_requests/save_conversation.js';

export function SaveConversationButton() {
    return (

        <div className="save-button-wrapper" onClick={saveConversation}>
            <div className="save-button">Save conversation</div>
        </div>
    )
}