function clear_conversation(){
    var divs = document.getElementsByClassName("conversation");

    for (var i = divs.length - 1; i >= 0; i--) {
        var div = divs[i];
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }
}


function add_div_to_conversation(speaker_class, text) {
    const div_conv = document.createElement("div");
    const div_owner = document.createElement("div");
    const div_text = document.createElement("div");
    const div_circle = document.createElement("div");

    div_conv.classList.add('div_conv');

    div_owner.classList.add('owner');
    div_owner.innerHTML = speaker_class;

    div_text.classList.add(speaker_class, 'div_text');



    

    div_circle.classList.add('circle');
    div_owner.appendChild(div_circle);

    div_conv.appendChild(div_owner);
    div_conv.appendChild(div_text);

    document.querySelector(".conversation").appendChild(div_conv);


    var elements = document.getElementsByClassName('div_conv');
    var lastElement = elements[elements.length - 1];


    var lastElement_div_text = lastElement.getElementsByClassName('div_text')[0];
    // lastElement_div_text.innerHTML = text;
    

    type_text_to_div(lastElement_div_text, text, 1000, 0)


}

function type_text_to_div(element, text, time, counter) {
    if (counter < text.length) {
        element.innerHTML += text.charAt(counter);
        console.log(text.charAt(counter));
        counter++;
        setTimeout(function () {
            type_text_to_div(element, text, time, counter);
        }, time);
        
    }
}