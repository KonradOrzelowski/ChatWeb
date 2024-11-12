import React, { useState, useEffect } from 'react';
import './ChatInput.css';

import {addDiv2Conversation} from '../../utils.js';
import {sendToServer} from '../../send_to_server.js';



export function ChatInput() {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addDiv2Conversation('You', event.target.value)
    
            sendToServer(event.target.value);
    
            document.getElementById('chat-input').value = "";
        }
      };
    
      useEffect(() => {

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    return (

            <div className="input_div">
                <input id="chat-input" type="text" placeholder="Message ChatBot"/>
            </div>
    )
}
