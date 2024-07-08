import React from 'react';
import ReactDOM from 'react-dom';

// import { DarkModeButton } from './components/DarkModeButton/DarkModeButton.jsx';
import { RightSide } from './components/RightSide/RightSide.jsx';

export function loadReactDom() {
    // const domNode = document.getElementById('dark-mode-button');
    // ReactDOM.createRoot(domNode).render(<DarkModeButton />);

    const rightSideNode = document.getElementById('right-side');
    ReactDOM.createRoot(rightSideNode).render(<RightSide />);
}
