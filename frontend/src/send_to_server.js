import { getUrl } from './get_url.js';

function initIntervalId(){
    const intervalId = setInterval(() => {
        var elements = document.getElementsByClassName('div_conv');
        var lastElement = elements[elements.length - 1];
    
        try{
            var typing_0 = lastElement.getElementsByClassName('typing_0')[0];
            typing_0.classList.remove("typing_0");
            typing_0.classList.add("typing_1");
        }catch(err){
            var typing_1 = lastElement.getElementsByClassName('typing_1')[0];
            typing_1.classList.remove("typing_1");
            typing_1.classList.add("typing_0");
        }
    }, 500);

    return intervalId;
}



function makeDivConv(speakerClass, speakerDiv){


    const div_conv = document.createElement("div");

    div_conv.innerHTML =
        `<div class="div_conv">
            <div class="owner">
                <div class="div_circle ${speakerDiv}"></div>
                ${speakerClass}
                
            </div>
            <div class="${speakerClass} div_text">
                <div class="typing_0">
                </div>
            </div>
        </div>`

    return div_conv;
}
import {postData} from './network_requests/fetch_data.js';
import {typeTextToDiv} from './utils.js';

export const sendToServer = async function(msg) {
    const endpointUrl = getUrl('message');
    const postResponse = await postData(endpointUrl, { "message": msg });
    
    const text = await postResponse.json();
    const serverResponse = text.response.serverResponse;

    const intervalId = initIntervalId();

    const divConv = makeDivConv('ChatBot', 'div_chatbot')
    document.querySelector(".conversation").appendChild(divConv);





    // Clear the interval once the response is received
    clearInterval(intervalId);

    var elements = document.getElementsByClassName('div_conv');
    var lastElement = elements[elements.length - 1];


    var lastElement_div_text = lastElement.getElementsByClassName('div_text')[0];
    lastElement_div_text.innerHTML = '';

    typeTextToDiv(lastElement_div_text, serverResponse, 50, 0)

};