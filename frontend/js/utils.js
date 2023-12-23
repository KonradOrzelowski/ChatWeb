function add_div_to_conversation(speaker_class, text) {
    const divConv = document.createElement("div");
    divConv.classList.add(speaker_class, 'conversation_item');
    divConv.innerHTML = text;
    document.querySelector(".conversation").appendChild(divConv);
}

module.exports.add_div_to_conversation = add_div_to_conversation;