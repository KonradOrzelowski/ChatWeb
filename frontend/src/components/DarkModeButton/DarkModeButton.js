import React from 'react';
import ReactDOM from 'react-dom';

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

export function DarkModeButton() {
    return <button onClick={darkMode}>o</button>;
}