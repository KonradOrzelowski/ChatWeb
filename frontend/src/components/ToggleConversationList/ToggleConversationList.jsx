import React, { useState, useEffect } from 'react';
import './ToggleConversationList.css';

export function ToggleConversationList() {
    return(
    <div>
        
        <div id='toggleWhenSmall'
        style={{width: '200px', height: '10vh', backgroundColor: 'blue'}}
        onClick={ () => {

            const elementHidden = document.getElementsByClassName('div-list-of-conversations')[0];
            elementHidden.classList.toggle('when-small-hidden');

            const overlayElement = document.getElementsByClassName('overlay')[0];
            overlayElement.classList.toggle('active');
 

        }}
        >
        </div>
        
        <div id='toggleWhenLarge'
        
        
        onClick={ () => {

            const element = document.getElementsByClassName('div-list-of-conversations')[0];
            element.classList.toggle('when-large-hidden');

            const toogleElement = document.getElementById('toggleWhenLarge');
            toogleElement.classList.toggle('when-large-hidden');

            const LeftSide = document.getElementById('left-side');
            LeftSide.classList.toggle('when-large-hidden');
            
        }}
        >

        </div>
    </div>

    )
}
