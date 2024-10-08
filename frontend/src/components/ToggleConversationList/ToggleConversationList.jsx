import React, { useState, useEffect } from 'react';
import './ToggleConversationList.css';
import { AddNewChat } from '../AddNewChat/AddNewChat.jsx';


export function ToggleConversationList() {

    const onClickToggleWhenSmall = () => {
        const elementHidden = document.getElementsByClassName('div-list-of-conversations')[0];
        elementHidden.classList.toggle('when-small-hidden');
    
        const toogleElement = document.getElementById('toggleWhenSmall');
        toogleElement.classList.toggle('when-small-hidden');
    
        const overlayElement = document.getElementsByClassName('overlay')[0];
        overlayElement.classList.toggle('active');
    }
    
    const onClickToggleWhenLarge = () => {
        const element = document.getElementsByClassName('div-list-of-conversations')[0];
        element.classList.toggle('when-large-hidden');
    
        const toogleElement = document.getElementById('toggleWhenLarge');
        toogleElement.classList.toggle('when-large-hidden');
    
        const LeftSide = document.getElementById('left-side');
        LeftSide.classList.toggle('when-large-hidden');
    }

    function onClickTestToggle(){
        
        const parentElement = document.getElementById('testToggle')
        if(parentElement.classList.contains('is_small')){
            console.log('Parent element has class is_small');
        } else {
            console.log('Parent element does not have class is_small');
        }
    }

    return(
    <div>
        {/* <div id='testToggle' className={['toggleWhenSmall', 'toggleWhenLarge']} onClick={onClickTestToggle}>

        </div> */}
        <div id='toggleWhenSmall'
            onClick={ onClickToggleWhenSmall}
        >
            <AddNewChat/>
        </div>
        
        <div id='toggleWhenLarge'
            onClick={ onClickToggleWhenLarge}
        >
            <AddNewChat/>
        </div>
    </div>

    )
}
