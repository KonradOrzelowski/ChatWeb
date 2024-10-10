import React, { useState, useEffect } from 'react';
import './ToggleConversationList.css';
import { AddNewChat } from '../AddNewChat/AddNewChat.jsx';


export function ToggleConversationList() {

    const onClickToggleWhenSmall = () => {
        const elementHidden = document.getElementsByClassName('div-list-of-conversations')[0];
        elementHidden.classList.toggle('when-small-hidden');
    
        const toogleElement = document.getElementById('toogleList');
        toogleElement.classList.toggle('when-small-hidden');
    
        // const overlayElement = document.getElementsByClassName('overlay')[0];
        // overlayElement.classList.toggle('active');
    }
    
    const onClickToggleWhenLarge = () => {
        const element = document.getElementsByClassName('div-list-of-conversations')[0];
        element.classList.toggle('when-large-hidden');
    
        const toogleElement = document.getElementById('toogleList');
        toogleElement.classList.toggle('when-large-hidden');
    
        const LeftSide = document.getElementById('left-side');
        LeftSide.classList.toggle('when-large-hidden');
    }

    function onClickToogleList(){
        
        const width = window.innerWidth;

        if(width < 600){
            onClickToggleWhenSmall();
        }else{
            onClickToggleWhenLarge();
        }
    }

    return(
    <div>
        <div id='toogleList' onClick={onClickToogleList}>
            <div 
                className="green-square" 
                style={{width: '10vh', height: '10vh', backgroundColor: 'green'}}
            ></div>
            <AddNewChat/>
        </div>

    </div>

    )
}
