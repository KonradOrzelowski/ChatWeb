import React, { useState, useEffect } from 'react';
import './RightSide.css';
import { DarkModeButton } from '../DarkModeButton/DarkModeButton.jsx';
import { SaveConversationButton } from '../SaveConversationButton/SaveConversationButton.jsx'

export function RightSide() {

    return (
        <>
            {/* <SaveConversationButton/> */}
            <DarkModeButton/>
        </>
    );
}
