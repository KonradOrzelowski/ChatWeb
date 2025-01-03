import { deletePost } from './network_requests/delete_post.js';
const { ApiClient } = require(".network_requests/api-client.js");
function getCustomAlertWrapper(){
    let customAlertWrapper = document.createElement('div');
    customAlertWrapper.id = 'custom-alert-wrapper';
    return customAlertWrapper
}


export const showEditAlert = function(conversationId, itemTitle){ 

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
        sendEditAlert(conversationId, 'custom-alert-wrapper-edit');
    });

}

export const showDeleteAlert = function(conversationId, itemTitle){ 
    console.log(`"showDeleteAlert ${conversationId}"`)

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
        sendDeleteAlert(conversationId, 'custom-alert-wrapper-delete');
    });

    
}

function hideCustomAlert(elementId) {

    var customAlert = document.getElementsByClassName(elementId)[0];
    if (customAlert) {
        customAlert.remove();
    }
}



async function sendEditAlert(conversationId, elementId){

    var customAlert = document.getElementsByClassName(elementId)[0];
    var childInput = customAlert.querySelector('input');
    const newTitle = childInput.value;
    


    const data = { newTitle: newTitle }
    await serverApi.callEndPoint("PATCH", `conversations/${conversationId}`, data)
    hideCustomAlert(elementId)

}

function sendDeleteAlert(conversationId, elementId){
    
    deletePost(conversationId)
    hideCustomAlert(elementId)
}

