import React, { useState, useEffect } from 'react';
import './LeftSide.css';

import { ConversationTitle } from '../ConversationTitle/ConversationTitle.jsx';
import { ToggleConversationList } from '../ToggleConversationList/ToggleConversationList.jsx';

import { fetchData } from '../..//network_requests/fetch_data.js';
import { getUrl } from '../../get_url.js';

const ConversationDropdown = ({ conversationTitles, reloadLeftSide }) => {

    var sortedConversationTitles = conversationTitles.slice(0);
    sortedConversationTitles.sort(function(a,b) {
        return new Date(b.lastChangeDate) - new Date(a.lastChangeDate);
    });

    return (
        <div className="dropdown-menu">
            {
                sortedConversationTitles.map((item) => (
                    <ConversationTitle
                    key={item._id}
                    title={item.title}
                    id={item._id}
                    reloadLeftSide={reloadLeftSide}
                    />
                ))
            }
        </div>
    )
}


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
        window.addEventListener('reloadLeftSide', reloadLeftSide);

        return () => {
            window.removeEventListener('reloadLeftSide', reloadLeftSide);
        };
    }, [reloadKey]);

    if (!conversationTitles) {
        return <div>Loading...</div>;
    }

    return (
        <div className='left-side-content'>
            <ToggleConversationList/>
            <div className='div-list-of-conversations'>
                
                <ConversationDropdown
                    conversationTitles={conversationTitles}
                    reloadLeftSide={reloadLeftSide}
                />
            </div>
                       
        
        </div>


        
    )

}
