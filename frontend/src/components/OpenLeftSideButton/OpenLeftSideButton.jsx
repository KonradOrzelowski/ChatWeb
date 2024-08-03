import React, { useEffect, useState } from 'react';
import './OpenLeftSideButton.css';

import { fetchData } from '../..//network_requests/fetch_data.js';
import { getUrl } from '../../get_url.js';

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

    useEffect(() => {
        const getConversation = async () => {
            const endpointUrl = getUrl('lists/list_of_titles');
            const conversationTitles = await fetchData(endpointUrl);

            console.log(conversationTitles)
        }

        getConversation();

    },[]);






    // console.log(conversationTitles)

    return (
        <>
            <button onClick={() => setOpen(!open)}>Click me!</button>
            <GetList isOpen={open} />
        </>
    );
}