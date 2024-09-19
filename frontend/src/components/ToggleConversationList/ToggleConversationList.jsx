import React, { useState, useEffect } from 'react';
import './ToggleConversationList.css';

export function ToggleConversationList() {
    return(
        <div 
            style={{width: '200px', height: '10vh', backgroundColor: 'blue'}}
            onClick={ () => {

                const element = document.getElementsByClassName('div-list-of-conversations')[0];
                element.classList.toggle('hidden');
            }}
        >

        </div>
    )
}
