import React, { useState, useEffect } from 'react';

import './OpenLeftSideButton.css';

export function OpenLeftSideButton() {
    const [isMobileView, setMobileView] = useState(false);
    
    useEffect(() => {
        const width = document.body.scrollWidth;
        if (width <= 600) {
            setMobileView(true);
        }
    }, []);


    const showListOfConv = () => {
        
        var element = document.getElementsByClassName("div-list-of-conversations")[0];
        
    };

    return (

        <div>
            <button onClick={showListOfConv}>Click me!</button>
        </div>
    )
}