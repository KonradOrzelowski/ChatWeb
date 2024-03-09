document.getElementById('chat-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        add_div_to_conversation('You', event.target.value)

        sendToServer(event.target.value);

        

        document.getElementById('chat-input').value = "";

    }
});

function add_click_to_new_chat() {
    var new_chat = document.getElementsByClassName("new-chat")[0];

    new_chat.addEventListener("click", (event) => {

        sendNewChatSignal();
        clear_conversation();
        


    });
}

add_click_to_new_chat();


window.addEventListener('beforeunload', function (event){
    closeWebsite()
});


// Function to execute when the page is refreshed
function onPageRefresh() {
    console.log("Page is being refreshed");
    // Add your code here to handle page refresh
}

// Function to execute when the page is closed
function onPageClose() {
    console.log("Page is being closed");
    // Add your code here to handle page close
}

// Event listener for page refresh
window.addEventListener("beforeunload", onPageRefresh);

// Event listener for page close
window.addEventListener("unload", onPageClose);


