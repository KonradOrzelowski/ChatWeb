import React from 'react';

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

export function DarkModeButton() {
    return <button onClick={darkMode}>
        <img id="darkModeIcon" src="assets/icons/dark-mode.svg" alt="Icon description"></img>
    </button>;
}