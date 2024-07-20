import React from 'react';
import ReactDOM from 'react-dom/client';

import { RightSide } from './components/RightSide/RightSide.jsx';

export function loadReactDom() {

    const rightSideNode = document.getElementById('right-side');
    ReactDOM.createRoot(rightSideNode).render(<RightSide />);

}

