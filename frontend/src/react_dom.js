import React from 'react';
import ReactDOM from 'react-dom';

import { DarkModeButton } from './components/DarkModeButton/DarkModeButton.js';


export function createReactDom() {
    const domNode = document.getElementById('dark-mode-button');
    ReactDOM.createRoot(domNode).render(<DarkModeButton />);
}
