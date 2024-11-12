import React, { useState, useEffect } from 'react';
import './MainContent.css';



export function MainContent() {

    return (
        <div className = "main-content">
            <div className="conversation"></div>

            <div className="input_div">
                <input id="chat-input" type="text" placeholder="Message ChatBot"/>
            </div>
        </div>   
    )
}
