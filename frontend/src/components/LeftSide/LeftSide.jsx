import React, { useState, useEffect } from 'react';
import './LeftSide.css';

import { ConversationTitle } from '../ConversationTitle/ConversationTitle.jsx';
import { ToggleConversationList } from '../ToggleConversationList/ToggleConversationList.jsx';

import { fetchData } from '../..//network_requests/fetch_data.js';
import { getUrl } from '../../get_url.js';

/**
 * Categorizes a list of conversation titles based on their last change date.
 *
 * @param {Array<Object>} conversationTitles - An array of objects representing conversation titles. 
 * Each object should have a `lastChangeDate` property in a valid date string format.
 *
 * @returns {Object} An object containing categorized conversation titles:
 * - `todayList`: Titles changed in the last 24 hours.
 * - `pastWeekList`: Titles changed in the last week but more than 24 hours ago.
 * - `pastMonthList`: Titles changed in the last month but more than a week ago.
 * - `olderList`: Titles changed more than a month ago.
 *
 * @example
 * const conversationTitles = [
 *     { title: "Chat A", lastChangeDate: "2024-11-29T10:00:00Z" },
 *     { title: "Chat B", lastChangeDate: "2024-11-20T10:00:00Z" }
 * ];
 * const categorized = splitTitles(conversationTitles);
 * console.log(categorized.todayList); // Logs titles changed today.
 */
function splitTitles(conversationTitles){
    const now = Date.now();
    
    const oneDay = 1 * 24 * 60 * 60 * 1000;
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    
    const categories = {
        todayList: [],
        pastWeekList: [],
        pastMonthList: [],
        olderList: [],
    };
    
    for (const title of conversationTitles) {

        const lastChangeDate = new Date(title.lastChangeDate);
        if (isNaN(lastChangeDate)) {
            console.warn("Invalid date format:", title.lastChangeDate);
            continue;
        }


        const timeDifference = now - lastChangeDate.getTime();

        if (timeDifference <= oneDay) {
            categories.todayList.push(title);
        } else if (timeDifference <= oneWeek) {
            categories.pastWeekList.push(title);
        } else if (timeDifference <= oneMonth) {
            categories.pastMonthList.push(title);
        } else {
            categories.olderList.push(title);
        }
    
    }

    return categories
}

function renderCategory(list, title, reloadLeftSide) {
    if (list.length === 0) return null;
    return (
        <div key={title}>
            <h4>{title}</h4>
            {list.map((item) => (
                <ConversationTitle
                    key={item._id}
                    title={item.title}
                    id={item._id}
                    reloadLeftSide={reloadLeftSide}
                />
            ))}
        </div>
    );
}

const ConversationDropdown = ({ conversationTitles, reloadLeftSide }) => {

    var conversationTitles = conversationTitles.slice(0);
    conversationTitles.sort(function(a,b) {
        return new Date(b.lastChangeDate) - new Date(a.lastChangeDate);
    });

    const { todayList, pastWeekList, pastMonthList, olderList } = splitTitles(conversationTitles);

    return (
        <div className="dropdown-menu">

            {renderCategory(todayList, "Today", reloadLeftSide)}
            {renderCategory(pastWeekList, "Past Week", reloadLeftSide)}
            {renderCategory(pastMonthList, "Past Month", reloadLeftSide)}
            {renderCategory(olderList, "olderThanMonthList", reloadLeftSide)}

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
