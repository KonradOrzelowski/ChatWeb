import React, { useState, useEffect } from 'react';

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

export function DarkModeButton() {
    // return isDarkMode equal to false and function setIsDarkMode which is use to set value of isDarkMode and trigger a re-render
    const [isDarkMode, setIsDarkMode] = useState(false);

    // get document.body and set value of isDarkMode.
    // It will re render stuff if "dark-mode" is on
    useEffect(() => {
        const element = document.body;
        setIsDarkMode(element.classList.contains("dark-mode"));
    }, []);

    // This just check 
    useEffect(() => {
        const element = document.body;
        if (isDarkMode) {
            element.classList.add("dark-mode");
        } else {
            element.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        darkMode();
        setIsDarkMode(prevMode => !prevMode);
    };

    const asset = isDarkMode ? "assets/icons/light-mode.svg" : "assets/icons/dark-mode.svg";

    return (
        <button onClick={toggleDarkMode}>
            <img id="darkModeIcon" src={asset} alt="Icon description" />
        </button>
    );
}
