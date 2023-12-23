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

    div_owner.classList.add('owner');
    div_owner.innerHTML = speaker_class;

    div_text.classList.add(speaker_class, 'conversation_item');
    div_text.innerHTML = text;

    div_circle.classList.add('circle');
    div_owner.appendChild(div_circle);

    div_conv.appendChild(div_owner);
    div_conv.appendChild(div_text);

    document.querySelector(".conversation").appendChild(div_conv);
}