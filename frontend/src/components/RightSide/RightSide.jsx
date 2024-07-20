import React, { useState, useEffect } from 'react';
import './RightSide.css';
import { DarkModeButton } from '../DarkModeButton/DarkModeButton.jsx';

export function RightSide() {

    return (
        <>
            <div className="save-button-wrapper">
                <div className="save-button">Save conversation</div>
               
            </div>
            <DarkModeButton />
        </>
    );
}
