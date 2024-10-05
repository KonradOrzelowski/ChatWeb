import React, { useState, useEffect } from 'react';
import './ToggleConversationList.css';
import { AddNewChat } from '../AddNewChat/AddNewChat.jsx';

onClickToggleWhenSmall = () => {
    const elementHidden = document.getElementsByClassName('div-list-of-conversations')[0];
    elementHidden.classList.toggle('when-small-hidden');

    const toogleElement = document.getElementById('toggleWhenSmall');
    toogleElement.classList.toggle('when-small-hidden');

    const overlayElement = document.getElementsByClassName('overlay')[0];
    overlayElement.classList.toggle('active');
}

onClickToggleWhenLarge = () => {
    const element = document.getElementsByClassName('div-list-of-conversations')[0];
    element.classList.toggle('when-large-hidden');

    const toogleElement = document.getElementById('toggleWhenLarge');
    toogleElement.classList.toggle('when-large-hidden');

    const LeftSide = document.getElementById('left-side');
    LeftSide.classList.toggle('when-large-hidden');
}

export function ToggleConversationList() {
    return(
    <div>
        {/* <AddNewChat/> */}
        <div id='toggleWhenSmall'
        
        onClick={ onClickToggleWhenSmall() }
        >
        </div>
        
        <div id='toggleWhenLarge'
        
        
        onClick={ onClickToggleWhenLarge() }
        >

        </div>
    </div>

    )
}
