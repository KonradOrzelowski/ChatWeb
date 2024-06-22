function getCustomAlertWrapper(){
    let customAlertWrapper = document.createElement('div');
    customAlertWrapper.id = 'custom-alert-wrapper';
    return customAlertWrapper
}


export const showEditAlert = function(itemID, itemTitle){ 

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

export const showDeleteAlert = function(itemID, itemTitle){ 
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
            <button onclick="hideCustomAlert('custom-alert-wrapper-delete')">Cancel</button>
            <button onclick="sendDeleteAlert('${itemID}', 'custom-alert-wrapper-delete')"id="button-delete">Delete</button>
        </div>
    </div>
    `
    var customAlertWrapper = getCustomAlertWrapper()
    customAlertWrapper.classList.add('custom-alert-wrapper-delete');

    customAlertWrapper.appendChild(customAlert)
    contentDocument.appendChild(customAlertWrapper);

    
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

// showDeleteAlert(0, 'Style Delete Alert')
// showEditAlert(0, 'Style Delete Alert')

function sendDeleteAlert(itemID, elementId){
    
    deletePost(itemID)
    hideCustomAlert(elementId)
}

