import React, { useState, useEffect } from 'react';
import './LeftSide.css';

import { fetchData } from '../..//network_requests/fetch_data.js';
import { getUrl } from '../../get_url.js';

const ChildComponent = ({ title  }) => {
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

    // useEffect(() => {
    //     const _fetchData = async () => {
    //         const endpointUrl = getUrl('lists/list_of_titles');

    //         let listOfTitles = await fetchData(endpointUrl);
    //         listOfTitles = listOfTitles.response;
    //         console.log(`Url: ${endpointUrl}`);
    //         console.log(listOfTitles);
    //         setConversationTitles(listOfTitles);
    //     };

    //     _fetchData();
    // }, []);

    console.log(conversationTitles);
    return (<><p>AAA</p></>)
        // return (
        //     <div className="dropdown-menu" >
        //         {conversationTitles.map((item, index) => (
        //             <ChildComponent key={index} title={item.title}/>
        //         ))}
        //     </div>
        // )

}
