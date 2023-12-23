function clear_conversation(){
    var divs = document.getElementsByClassName("conversation");

    for (var i = divs.length - 1; i >= 0; i--) {
        var div = divs[i];
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }
}
