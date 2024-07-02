import React from 'react';
import ReactDOM from 'react-dom';

import { DarkModeButton } from './components/DarkModeButton/DarkModeButton.jsx';


export function loadReactDom() {
    const domNode = document.getElementById('dark-mode-button');
    ReactDOM.createRoot(domNode).render(<DarkModeButton />);
}
