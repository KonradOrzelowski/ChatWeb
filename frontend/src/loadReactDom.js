import React from 'react';
import ReactDOM from 'react-dom/client';

import { RightSide } from './components/RightSide/RightSide.jsx';
import { OpenLeftSideButton } from './components/OpenLeftSideButton/OpenLeftSideButton.jsx';

export function loadReactDom() {

    const rightSideNode = document.getElementById('right-side');
    ReactDOM.createRoot(rightSideNode).render(<RightSide />);

    const openLeftSideButtonNode = document.getElementById('open-left-side');
    ReactDOM.createRoot(openLeftSideButtonNode).render(<OpenLeftSideButton />);

}

