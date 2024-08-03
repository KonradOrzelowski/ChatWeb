import React, { useEffect, useState } from 'react';
import './OpenLeftSideButton.css';

import { fetchData } from '../..//network_requests/fetch_data.js';
import { getUrl } from '../../get_url.js';


function GetChildren({data}) {
    return React.Children.map(data, child => (
        <div className="dropdown-item">
            <p>{child}</p>
        </div>
    ))
}

function GetList({ isOpen, data }){
    if (isOpen) {
        return (
            <div className="dropdown-menu">
                {GetChildren(data)}
            </div>
        )
    }else{
        return null;
    }
}

export function OpenLeftSideButton() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getConversation = async () => {
            const endpointUrl = getUrl('lists/list_of_titles');
            let conversationTitles = await fetchData(endpointUrl);
            conversationTitles = conversationTitles.response
            setData(conversationTitles);
        }
        getConversation();
    },[]);
    console.log(`This is data ${data}`)
    return (
        <>
            <button onClick={() => setOpen(!open)}>Click me!</button>
            <GetList isOpen={open} data={data} />
        </>
    );
}