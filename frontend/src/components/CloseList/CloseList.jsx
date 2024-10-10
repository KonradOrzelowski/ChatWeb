import React, { useState, useEffect } from 'react';

import './CloseList.css';

export function CloseList() {
    const onClickToggleWhenSmall = () => {
        const elementHidden = document.getElementsByClassName('div-list-of-conversations')[0];
        elementHidden.classList.toggle('when-small-hidden');
    
        const toogleElement = document.getElementsByClassName('new-chat')[0];
        toogleElement.classList.toggle('when-small-hidden');
    
        // const overlayElement = document.getElementsByClassName('overlay')[0];
        // overlayElement.classList.toggle('active');
    }
    
    const onClickToggleWhenLarge = () => {
        const element = document.getElementsByClassName('div-list-of-conversations')[0];
        element.classList.toggle('when-large-hidden');
    
        const toogleElement = document.getElementsByClassName('new-chat')[0];
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

    return (
        <div className="close-list"  onClick={onClickToogleList}>
            <img src="assets/icons/light-mode.svg"
                alt="Icon description"
            />
        </div>
    )
}