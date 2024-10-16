/**
 * Clears the conversation by removing all child elements from the conversation container.
 */
export const clearConversation = function(){
    try{
        var divs = document.getElementsByClassName("conversation");

        for (var i = divs.length - 1; i >= 0; i--) {
            var div = divs[i];
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
        }
    }catch{
        console.log("Error clearing conversation");
    }

}

/**
 * Types text into a div element character by character with a specified delay.
 * @param {HTMLElement} element - The div element to type the text into.
 * @param {string} text - The text to be typed into the div element.
 * @param {number} time - The delay between typing each character (in milliseconds).
 * @param {number} counter - The current index of the character being typed.
 */
export const typeTextToDiv = function(element, text, time, counter){
    if (counter < text.length) {
        element.innerHTML += text.charAt(counter);
        counter++;
        setTimeout(function () {
            typeTextToDiv(element, text, time, counter);
        }, time);
        
    }
}


/**
 * Adds a new div element to the conversation container with the specified speaker class, text, and optional time delay.
 * @param {string} speaker_class - The class name of the speaker.
 * @param {string} text - The text content to be displayed in the div.
 * @param {number} [time=50] - Optional time delay in milliseconds for typing effect.
 */
export const addDiv2Conversation = function(speaker_class, text, time = 50){
    const div_conv = document.createElement("div");

    var speaker_div = 'div_chatbot';
    if(speaker_class == 'You'){
        speaker_div = 'div_you'
    }
    
    div_conv.innerHTML = 
        `<div class="div_conv">
        <div class="owner">
            <div class="div_circle ${speaker_div}"></div>
            ${speaker_class}
            
        </div>
        <div class="${speaker_class} div_text"></div>
        </div>`

    document.querySelector(".conversation").appendChild(div_conv);


    var elements = document.getElementsByClassName('div_conv');
    var lastElement = elements[elements.length - 1];


    var lastElement_div_text = lastElement.getElementsByClassName('div_text')[0];   

    if(time == 0){
        lastElement_div_text.innerHTML = text;
    }else if(speaker_class == "ChatBot"){
        typeTextToDiv(lastElement_div_text, text, time, 0)
    }else{
        lastElement_div_text.innerHTML = text;
    }
}

