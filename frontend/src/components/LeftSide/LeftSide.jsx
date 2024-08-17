import React, { useState, useEffect } from 'react';
import './LeftSide.css';

export function LeftSide() {

    return (
        <>
            <div class = "div-list-of-conversations">
                <ul class = "list-of-conversations">
                    <li class = "conversation-title new-chat">
                        New chat
                        <img src="assets/icons/text-document-add-icon.svg" alt="Icon description" style={{maxWidth: '1.25rem', maxHeight: '1.25rem'}} />
    
                    </li>
                </ul>
            </div>

            <div id="open-left-side">Test of children</div>
        </>
    );
}
