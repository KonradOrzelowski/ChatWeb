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

    let now = Date.now();
    let tempDate, lastChangeDate, title;
    
    const oneDay = 1 * 24 * 60 * 60 * 1000;
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    
    const todayList = [];
    const moreThanDayList = [];
    const moreThanWeekList = [];
    const olderThanMonthList = [];
    
    // let isMoreThanADay, isMoreThanAWeek, isMoreThanAMonth;
    
    for(let i = 0; i < sortedConversationTitles.length; i++){
        lastChangeDate = new Date(sortedConversationTitles[i].lastChangeDate);
        title = sortedConversationTitles[i].title;
    
        const timeDifference = now - lastChangeDate.getTime();

        if (timeDifference <= oneDay) {
            // Today
            todayList.push(sortedConversationTitles[i]);
        } else if (timeDifference > oneDay && timeDifference <= oneWeek) {
            // More than a day, but within a week
            moreThanDayList.push(sortedConversationTitles[i]);
        } else if (timeDifference > oneWeek && timeDifference <= oneMonth) {
            // More than a week, but within a month
            moreThanWeekList.push(sortedConversationTitles[i]);
        } else if (timeDifference > oneMonth) {
            // Older than a month
            olderThanMonthList.push(sortedConversationTitles[i]);
        }

        console.log(`title: ${title} lastChangeDate: ${lastChangeDate}`)
    
    }


    return (
        <div className="dropdown-menu">
            <h3>todayList</h3>
            {
                todayList.map((item) => (
                    <ConversationTitle
                    key={item._id}
                    title={item.title}
                    id={item._id}
                    reloadLeftSide={reloadLeftSide}
                    />
                ))
            }

            <h3>moreThanDayList</h3>
            {
                moreThanDayList.map((item) => (
                    <ConversationTitle
                    key={item._id}
                    title={item.title}
                    id={item._id}
                    reloadLeftSide={reloadLeftSide}
                    />
                ))
            }
            <h3>moreThanWeekList</h3>
            {
                moreThanWeekList.map((item) => (
                    <ConversationTitle
                    key={item._id}
                    title={item.title}
                    id={item._id}
                    moreThanWeekList={reloadLeftSide}
                    />
                ))
            }

            <h3>olderThanMonthList</h3>
            {
                olderThanMonthList.map((item) => (
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
