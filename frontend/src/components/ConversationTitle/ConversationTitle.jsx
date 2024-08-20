import React, { useState, useEffect } from 'react';

import './ConversationTitle.css';


import { updateConversationTitle } from '../..//network_requests/update_conversation_title.js';
import { deletePost } from '../..//network_requests/delete_post.js';
import { getUrl } from '../../get_url.js';
import { fetchData } from '../../network_requests/fetch_data.js';
import { clear_conversation, addDiv2Conversation } from '../../utils.js';

function getCustomAlertWrapper(){
    let customAlertWrapper = document.createElement('div');
    customAlertWrapper.id = 'custom-alert-wrapper';
    return customAlertWrapper
}


const showEditAlert = function(itemTitle, itemID){ 

    var contentDocument = document.getElementsByClassName("content")[0];
    let customAlert = document.createElement('div');
    customAlert.id = 'custom-alert';

    customAlert.innerHTML = `
    <div id = "custom-alert-upper">
        <p>Enter new title of chat</p>
    </div>

    <div id = "custom-alert-bottom">   
        <div id = "custom-alert-bottom-upper">
            <input type="text" id="inputField" value="${itemTitle}">
        </div>
        
        <div id = "custom-alert-bottom-bottom">
            <button id="button-cancel">Cancel</button>
            <button id="button-accept">Update</button>
        </div>

    </div>
    `


    var customAlertWrapper = getCustomAlertWrapper()
    customAlertWrapper.classList.add('custom-alert-wrapper-edit');

    customAlertWrapper.appendChild(customAlert)

    document.body.appendChild(customAlertWrapper);

    let cancelButton = customAlert.querySelector('#button-cancel');
    let updateButton = customAlert.querySelector('#button-accept');

    cancelButton.addEventListener('click', function() {
        hideCustomAlert('custom-alert-wrapper-edit');
    });

    updateButton.addEventListener('click', function() {
        sendEditAlert(itemID, 'custom-alert-wrapper-edit');
    });

}

const showDeleteAlert = function(itemTitle, itemID){ 
    console.log(`"showDeleteAlert ${itemID}"`)

    var contentDocument = document.getElementsByClassName("content")[0];
    let customAlert = document.createElement('div');
    customAlert.id = 'custom-alert';

    customAlert.innerHTML = `
    <div id = "custom-alert-upper">
        <p>Delete chat? </p>
    </div>

    <div id = "custom-alert-bottom">
        <div id = "custom-alert-bottom-upper">
            <p>This will delete <strong>${itemTitle}</strong>.</p>
            
        </div>

        <div id = "custom-alert-bottom-bottom">
            <button id="button-cancel">Cancel</button>
            <button id="button-delete">Delete</button>
        </div>
    </div>
    `
    var customAlertWrapper = getCustomAlertWrapper()
    customAlertWrapper.classList.add('custom-alert-wrapper-delete');

    customAlertWrapper.appendChild(customAlert)
    contentDocument.appendChild(customAlertWrapper);

    let cancelButton = customAlert.querySelector('#button-cancel');
    let deleteButton = customAlert.querySelector('#button-delete');

    cancelButton.addEventListener('click', function() {
        hideCustomAlert('custom-alert-wrapper-delete');
    });

    deleteButton.addEventListener('click', function() {
        sendDeleteAlert(itemID, 'custom-alert-wrapper-delete');
    });

    
}

function hideCustomAlert(elementId) {

    var customAlert = document.getElementsByClassName(elementId)[0];
    if (customAlert) {
        customAlert.remove();
    }
}

function sendEditAlert(itemID, elementId){

    var customAlert = document.getElementsByClassName(elementId)[0];
    var childInput = customAlert.querySelector('input');
    console.log(childInput.value)
    
    updateConversationTitle(itemID, childInput.value)
    hideCustomAlert(elementId)

}

function sendDeleteAlert(itemID, elementId){
    
    deletePost(itemID)
    hideCustomAlert(elementId)
}

async function displayConversation(conversationID){
        // Fetch conversation data from the server
        const HOST_NAME = process.env.HOST_NAME;

        const endpointUrl = getUrl(`conversations/${conversationID}`);

        let conversation = await fetchData(endpointUrl);

        // Clear existing conversation content
        clear_conversation();
        
        // Extract conversation from response
        conversation = conversation.response;

        // Populate conversation area with fetched data
        for (let item of conversation.conversation) {
            addDiv2Conversation(item.speaker, item.message, 0);
        }
}

export function ConversationTitle({ title, id  }){

    return (
      <div className='conversation-title' onClick={
            async () => await displayConversation(id)
        }>

        <a>{title}</a>
        <div className = "bottoms-wrapper">
            <div className = "bottoms-transtion">
            </div>
            <div className = "bottoms">

                <img
                    id="editIcon"
                    src="assets/icons/edit-pen-icon.svg"
                    alt="Icon description"
                    onClick={() => showEditAlert(title, id)} 
                />

                <img
                    id="deleteIcon"
                    src="assets/icons/trash-bin-icon.svg"
                    alt="Icon description"
                    onClick={() => showDeleteAlert(title, id)} 
                />
                
            </div>
        </div>
      </div>

    );
  };