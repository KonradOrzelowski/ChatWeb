import React, { useState, useEffect } from 'react';
import './ToggleConversationList.css';

export function ToggleConversationList() {
    return(
        <div 
            style={{width: '200px', height: '10vh', backgroundColor: 'blue'}}
            onClick={ () => {

                var elementId = document.getElementsByClassName('div-list-of-conversations')[0];
                if (elementId.style.display === 'none') {
                    elementId.style.display = 'block';
                } else {
                    elementId.style.display = 'none';
                }
            }}
        >

        </div>
    )
}