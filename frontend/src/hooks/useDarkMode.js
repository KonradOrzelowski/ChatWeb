import { useState, useEffect } from 'react';

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const updateDarkMode = () => {
            const element = document.body;
            setIsDarkMode(element.classList.contains("dark-mode"));
        };

        updateDarkMode();

        const observer = new MutationObserver(() => {
            updateDarkMode();
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => {
            observer.disconnect();
        };
    }, []);

    return isDarkMode;
}
