import React, { useState, useEffect } from 'react';
import './ToggleConversationList.css';
import { AddNewChat } from '../AddNewChat/AddNewChat.jsx';
import { CloseList } from '../CloseList/CloseList.jsx';

export function ToggleConversationList() {



    return(
    <div>
        <div id='toogleList'>
            <CloseList/>
            <AddNewChat/>
        </div>

    </div>

    )
}
