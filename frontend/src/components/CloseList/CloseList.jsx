import React, { useState, useEffect } from 'react';

import './CloseList.css';

export function CloseList() {
    return (
        <div className="close-list" onClick={() =>{

            const width = window.innerWidth;

            if(width < 600){
                const toogleElement = document.getElementsByClassName('new-chat')[0];
                toogleElement.classList.toggle('when-small-hidden');
                console.log(`toogleElement: ${toogleElement}`);
            }else{
                const toogleElement = document.getElementsByClassName('new-chat')[0];
                toogleElement.classList.toggle('when-large-hidden');
                console.log(`toogleElement: ${toogleElement}`);
            }

            
        }}>
            <img src="assets/icons/light-mode.svg"
                alt="Icon description"
            />
        </div>
    )
}