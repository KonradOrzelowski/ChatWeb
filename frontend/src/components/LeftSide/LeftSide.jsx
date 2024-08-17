import React, { useState, useEffect } from 'react';
import './LeftSide.css';

import { AddNewChat } from '../AddNewChat/AddNewChat.jsx';
import { ConversationTitle } from '../ConversationTitle/ConversationTitle.jsx';

import { fetchData } from '../..//network_requests/fetch_data.js';
import { getUrl } from '../../get_url.js';

export function LeftSide() {

    const [conversationTitles, setConversationTitles] = useState(null);

    useEffect(() => {
        const fetchTitles = async () => {
            const endpointUrl = getUrl('lists/list_of_titles');

            let listOfTitles = await fetchData(endpointUrl);
            listOfTitles = listOfTitles.response;
            setConversationTitles(listOfTitles);
        };

        fetchTitles();
    }, []);

    if (!conversationTitles) {
        return <div>Loading...</div>;
    }

    return (
        
        <div className='div-list-of-conversations'>
                <AddNewChat/>

                <div className="dropdown-menu">
                    {conversationTitles.map((item, index) => (
                        <ConversationTitle key={index} title={item.title} id={item._id} />
                    ))}
                </div>
            </div>
    )

}
