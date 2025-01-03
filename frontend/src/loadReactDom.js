import React from 'react';
import ReactDOM from 'react-dom/client';

import { LeftSide } from './components/LeftSide/LeftSide.jsx';
import { RightSide } from './components/RightSide/RightSide.jsx';
import { MainContent } from './components/MainContent/MainContent.jsx';

// import { OpenLeftSideButton } from './components/OpenLeftSideButton/OpenLeftSideButton.jsx';

export function loadReactDom() {
    
    const leftSideNode = document.getElementById('left-side');
    ReactDOM.createRoot(leftSideNode).render(<LeftSide />);

    const rightSideNode = document.getElementById('right-side');
    ReactDOM.createRoot(rightSideNode).render(<RightSide />);

    const mainNode = document.getElementById('main');
    ReactDOM.createRoot(mainNode).render(<MainContent />);



    // const openLeftSideButtonNode = document.getElementById('open-left-side');
    // ReactDOM.createRoot(openLeftSideButtonNode).render(<OpenLeftSideButton />);

}

