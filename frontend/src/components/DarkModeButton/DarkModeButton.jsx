import React, { useState, useEffect } from 'react';
import './DarkModeButton.css';

export function DarkModeButton() {
    // useState returns the state variable isDarkMode initialized to false,
    // and the function setIsDarkMode which updates isDarkMode and triggers a re-render
    const [isDarkMode, setIsDarkMode] = useState(false);

    // useEffect runs once after the initial render to check if the body element has the 'dark-mode' class
    // and sets isDarkMode accordingly
    useEffect(() => {
        const element = document.body;
        setIsDarkMode(element.classList.contains("dark-mode"));
    }, []);

    // useEffect runs every time isDarkMode changes to add or remove the 'dark-mode' class on the body element
    useEffect(() => {
        const element = document.body;
        if (isDarkMode) {
            element.classList.add("dark-mode");
        } else {
            element.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    // toggleDarkMode toggles the value of isDarkMode between true and false
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Depending on isDarkMode, set asset to 'light-mode.svg' or 'dark-mode.svg'
    const asset = isDarkMode ? "assets/icons/light-mode.svg" : "assets/icons/dark-mode.svg";

    return (
        <div className="dark-mode-button">
            <button onClick={toggleDarkMode}>
                <img id="darkModeIcon" src={asset} alt="Icon description" />
            </button>
        </div>

    );
}
