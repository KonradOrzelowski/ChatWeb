const url = 'http://localhost:3000/message';

const sendToServer = async (msg) => {
    let data = { message: msg };

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
    
    
        // lastElement_div_text.innerHTML += '.';
    }, 500);

    try {
        const div_conv = document.createElement("div");

        const speaker_class = 'ChatBot';
        
        if(speaker_class == 'You'){
            speaker_div = 'div_you'
        }else{
            speaker_div = 'div_chatbot'
        }
        
        div_conv.innerHTML =
            `<div class="div_conv">
                <div class="owner">
                    <div class="div_circle ${speaker_div}"></div>
                    ${speaker_class}
                    
                </div>
                <div class="${speaker_class} div_text">
                    <div class="typing_0">
                    </div>
                </div>
            </div>`
        
        document.querySelector(".conversation").appendChild(div_conv);
        



        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        data = await response.json();
        // Clear the interval once the response is received
        clearInterval(intervalId);

        var elements = document.getElementsByClassName('div_conv');
        var lastElement = elements[elements.length - 1];
    
    
        var lastElement_div_text = lastElement.getElementsByClassName('div_text')[0];
        lastElement_div_text.innerHTML = '';

        var text = data.asyncMessage;
    
        type_text_to_div(lastElement_div_text, text, 50, 0)


        // add_div_to_conversation("ChatBot", data.asyncMessage)

    } catch (error) {
        console.error('Error:', error);
    }
};

document.getElementById('chatInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        add_div_to_conversation('You', event.target.value)

        sendToServer(event.target.value);

        

        document.getElementById('chatInput').value = "";

    }
});

function add_click_to_new_chat() {
    var new_chat = document.getElementsByClassName("new_chat")[0];

    new_chat.addEventListener("click", (event) => {

        clear_conversation();

    });
}

add_click_to_new_chat();




