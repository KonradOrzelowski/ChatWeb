function getCustomAlertWrapper(){
    let customAlertWrapper = document.createElement('div');
    customAlertWrapper.id = 'custom-alert-wrapper';
    return customAlertWrapper
}




function showEditAlert(itemID, itemTitle) {

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
            <button onclick="hideCustomAlert('custom-alert-wrapper-edit')">Cancel</button>
            <button onclick="sendEditAlert('custom-alert-wrapper-edit')" id="button-accept">Update</button>
        </div>

    </div>
    `
    var customAlertWrapper = getCustomAlertWrapper()
    customAlertWrapper.classList.add('custom-alert-wrapper-edit');

    customAlertWrapper.appendChild(customAlert)
    contentDocument.appendChild(customAlertWrapper);

}


function showDeleteAlert(itemID, itemTitle) {
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

function sendDeleteAlert(itemID, elementId){
    
    console.log(itemID);
    hideCustomAlert(elementId)
}

function sendEditAlert(elementId){

    var customAlert = document.getElementsByClassName(elementId)[0];
    var childInput = customAlert.querySelector('input');
    console.log(childInput.value)
    hideCustomAlert(elementId)

}

showDeleteAlert(0, 'Style Delete Alert')
showEditAlert(0, 'Style Delete Alert')



const uurl = 'http://localhost:3000/receive';
const data = { message: 'Rocket launched!' };

fetch(uurl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
.then(response => {
    if (response.ok) {
        console.log('Mgs from server: Rocket launched successfully!');
    } else {
        console.error('Failed to launched the rocket. Status:', response.status);
    }
})
.catch(error => {
    console.error('Error occurred while launching the rocket:', error);
});