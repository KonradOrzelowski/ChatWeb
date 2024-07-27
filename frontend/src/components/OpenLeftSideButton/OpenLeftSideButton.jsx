import React, { useState, useEffect } from 'react';

import './OpenLeftSideButton.css';

export function OpenLeftSideButton() {
    const showListOfConv = () => {
        
        var element = document.getElementsByClassName("div-list-of-conversations")[0];

        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }


    };

    return (

        <div>
            <button onClick={showListOfConv}>Click me!</button>
        </div>
    )
}