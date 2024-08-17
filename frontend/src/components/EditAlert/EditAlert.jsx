import React, { useState, useEffect } from 'react';
import './EditAlert.css';

function hideCustomAlert(elementId) {

    var customAlert = document.getElementsByClassName(elementId)[0];
    if (customAlert) {
        customAlert.remove();
    }
}

export function EditAlert({ itemTitle, itemID  }){

    // var contentDocument = document.getElementsByClassName("content")[0];
    // let customAlert = document.createElement('div');
    // customAlert.id = 'custom-alert';


    // var customAlertWrapper = getCustomAlertWrapper()
    // customAlertWrapper.classList.add('custom-alert-wrapper-edit');

    // customAlertWrapper.appendChild(customAlert)

    // document.body.appendChild(customAlertWrapper);

    // let cancelButton = customAlert.querySelector('#button-cancel');
    // let updateButton = customAlert.querySelector('#button-accept');

    // cancelButton.addEventListener('click', function() {
    //     hideCustomAlert('custom-alert-wrapper-edit');
    // });

    // updateButton.addEventListener('click', function() {
    //     sendEditAlert(itemID, 'custom-alert-wrapper-edit');
    // });

    return(<>
        <div id="custom-alert-upper">
            <p>Enter new title of chat</p>
        </div>

        <div id="custom-alert-bottom">   
            <div id="custom-alert-bottom-upper">
                <input type="text" id="inputField" value={itemTitle} />
            </div>

            <div id="custom-alert-bottom-bottom">
                <button id="button-cancel">Cancel</button>
                <button id="button-accept">Update</button>
            </div>
        </div>
    </>);

}