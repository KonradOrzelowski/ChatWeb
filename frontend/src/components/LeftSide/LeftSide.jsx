import React, { useState, useEffect } from 'react';
import './LeftSide.css';

import { AddNewChat } from '../AddNewChat/AddNewChat.jsx';
import { ConversationTitle } from '../ConversationTitle/ConversationTitle.jsx';
import { ToggleConversationList } from '../ToggleConversationList/ToggleConversationList.jsx';

import { fetchData } from '../..//network_requests/fetch_data.js';
import { getUrl } from '../../get_url.js';

const ConversationDropdown = ({ conversationTitles, reloadLeftSide }) => (
    <div className="dropdown-menu">
        {conversationTitles.map((item, index) => (
            <ConversationTitle
                key={index}
                title={item.title}
                id={item._id}
                reloadLeftSide={reloadLeftSide}
            />
        ))}
    </div>
);



export function LeftSide() {

    const [conversationTitles, setConversationTitles] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    const reloadLeftSide = () => {
        setReloadKey(prevKey => prevKey + 1);
      };

    useEffect(() => {
        const fetchTitles = async () => {
            const endpointUrl = getUrl('lists/list_of_titles');

            let listOfTitles = await fetchData(endpointUrl);
            listOfTitles = listOfTitles.response;
            setConversationTitles(listOfTitles);
        };

        fetchTitles();
    }, [reloadKey]);

    if (!conversationTitles) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ToggleConversationList/>
            <div className='div-list-of-conversations'>
                <AddNewChat/>
                
                <ConversationDropdown
                    conversationTitles={conversationTitles}
                    reloadLeftSide={reloadLeftSide}
                />
            </div>
            
            
            {/* <button className='pop-conversation-dropdown'
                onClick={() => setOpen(!open)}>
                    Click me!
            </button> */}

            
        
        </div>


        
    )

}
