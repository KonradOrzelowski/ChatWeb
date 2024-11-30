import React, { useState, useEffect } from 'react';
import './LeftSide.css';

import { ConversationTitle } from '../ConversationTitle/ConversationTitle.jsx';
import { ToggleConversationList } from '../ToggleConversationList/ToggleConversationList.jsx';

import { fetchData } from '../..//network_requests/fetch_data.js';
import { getUrl } from '../../get_url.js';

function splitTitles(sortedConversationTitles){
    let now = Date.now();
    let lastChangeDate, title;
    
    const oneDay = 1 * 24 * 60 * 60 * 1000;
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    
    const todayList = [];
    const moreThanDayList = [];
    const moreThanWeekList = [];
    const olderThanMonthList = [];
    
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
    
    }

    return {
        'todayList': todayList,
        'moreThanDayList': moreThanDayList,
        'moreThanWeekList': moreThanWeekList,
        'olderThanMonthList': olderThanMonthList
    }
}

function getList(listToReturn, titleList, reloadLeftSide){
    return (<>
        <h3>{titleList}</h3>
        {listToReturn.map((item) => (
            <ConversationTitle
                key={item._id}
                title={item.title}
                id={item._id}
                reloadLeftSide={reloadLeftSide}
            />
        ))}
    </>)
}

const ConversationDropdown = ({ conversationTitles, reloadLeftSide }) => {

    var sortedConversationTitles = conversationTitles.slice(0);
    sortedConversationTitles.sort(function(a,b) {
        return new Date(b.lastChangeDate) - new Date(a.lastChangeDate);
    });

    const splitedTitels = splitTitles(sortedConversationTitles);
    const todayList = splitedTitels.todayList;
    const moreThanDayList = splitedTitels.moreThanDayList;
    const moreThanWeekList = splitedTitels.moreThanWeekList;
    const olderThanMonthList = splitedTitels.olderThanMonthList;

    return (
        <div className="dropdown-menu">

            {todayList.length !== 0 && getList(todayList, "todayList", reloadLeftSide)}
            {moreThanDayList.length !== 0 && getList(moreThanDayList, "moreThanDayList", reloadLeftSide)}
            {moreThanWeekList.length !== 0 && getList(moreThanWeekList, "moreThanWeekList", reloadLeftSide)}
            {olderThanMonthList.length !== 0 && getList(olderThanMonthList, "olderThanMonthList", reloadLeftSide)}

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
