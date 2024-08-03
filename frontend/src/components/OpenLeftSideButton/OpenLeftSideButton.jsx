import React, { useState } from 'react';
import './OpenLeftSideButton.css';

const children = [
    <a href="#">Link 1</a>,
    <a href="#">Link 2</a>,
    <a href="#">Link 3</a>
];

function GetChildren() {
    return React.Children.map(children, child => (
        <div className="dropdown-item">
            {child}
        </div>
    ))
}

function GetList({ isOpen }){
    if (isOpen) {
        return (
            <div className="dropdown-menu">
                {GetChildren()}
            </div>
        )
    }else{
        return null;
    }
}

export function OpenLeftSideButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(!open)}>Click me!</button>
            <GetList isOpen={open} />
        </>
    );
}