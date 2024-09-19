import React, { useState, useEffect } from 'react';
import './ToggleConversationList.css';

export function ToggleConversationList() {
    return(
    <div>
        <div id='toggle-blue'
        style={{width: '200px', height: '10vh', backgroundColor: 'blue'}}
        onClick={ () => {

            const element = document.getElementsByClassName('div-list-of-conversations')[0];
            element.classList.toggle('blue-hidden');

        }}
        >
        </div>
        
        <div id='toggle-red'
        
        style={{width: '200px', height: '10vh', backgroundColor: 'red'}}
        onClick={ () => {

            const element = document.getElementsByClassName('div-list-of-conversations')[0];
            element.classList.toggle('red-hidden');

        }}
        >

        </div>
    </div>

    )
}
