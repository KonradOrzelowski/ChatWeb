import React, { useState, useEffect } from 'react';

import './ConversationTitle.css';

export function ConversationTitle({ title  }){
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