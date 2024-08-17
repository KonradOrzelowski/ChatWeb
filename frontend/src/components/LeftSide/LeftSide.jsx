import React, { useState, useEffect } from 'react';
import './LeftSide.css';

import { fetchData } from '../..//network_requests/fetch_data.js';
import { getUrl } from '../../get_url.js';

const ConversationTitle = ({ title  }) => {
    return (
      <div className='conversation-title'>
        <a>{title}</a>
        <div className = "bottoms-wrapper">
            <div className = "bottoms-transtion">
            </div>
            <div className = "bottoms">
                <img id="editIcon" src="assets/icons/edit-pen-icon.svg" alt="Icon description"/>
                <img id="deleteIcon" src="assets/icons/trash-bin-icon.svg" alt="Icon description"/>
            </div>
        </div>
      </div>

    );
  };

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
            <div className="dropdown-menu" >
                {conversationTitles.map((item, index) => (
                    <ConversationTitle key={index} title={item.title}/>
                ))}
            </div>
        </div>
    )

}
