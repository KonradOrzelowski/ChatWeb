import React, { useState, useEffect } from 'react';
import './MainContent.css';

import { ChatInput } from '../ChatInput/ChatInput.jsx'



export function MainContent() {

    return (
        <div className = "main-content">
            <div className="conversation"></div>

            <ChatInput/>
        </div>   
    )
}