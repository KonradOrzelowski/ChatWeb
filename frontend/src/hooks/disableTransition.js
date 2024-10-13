import { useState, useEffect } from 'react';

export function disableTransition(isTriggered) {
    const [disableTransition, setDisableTransition] = useState(false);

    useEffect(() => {
        
        setDisableTransition(true);


        const timer = setTimeout(() => {
            setDisableTransition(false);
        }, 2500); 

        return () => clearTimeout(timer);
    }, [isTriggered]);

    return disableTransition;
}