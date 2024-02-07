async function get_data(url) {
    const response = await fetch(url);
    const response_json = await response.json();
    return response_json
}


async function main(){
    const list_of_titles = await get_data("http://localhost:3000/lists/list_of_titles");
    const list_of_convs = await get_data("http://localhost:3000/lists/list_of_convs");

    for (let value of list_of_titles.response) {

        let li = document.createElement("li");
        li.innerHTML = `
            <a>${value.title}</a>
            <div class = "bottoms-wrapper">
                <div class = "bottoms-transtion">
                </div>
                <div class = "bottoms">
                    <img src="assets/icons/edit-pen-icon.svg" alt="Icon description">
                    <img src="assets/icons/trash-bin-icon.svg" alt="Icon description">
                </div>
            </div>
            `



        // let link = document.createElement("a");
        
        // link.textContent = value.title;
        // li.appendChild(link);
        li.classList.add('conversation-title');

        let currentValue = value;

        li.addEventListener("click", async (event) => {
            console.log("Before get_data:", currentValue._id);
            clear_conversation();
            
            let conversation = await get_data(`http://localhost:3000/conversations/${currentValue._id}`);
            conversation = conversation.response;
            console.log(currentValue._id)
            for(item of conversation.conversation){
                add_div_to_conversation(item.speaker, item.message, 0)
            }

        });
        // const conversationElement = document.querySelector('.conversation');
        
        document.querySelector(".list-of-conversations").appendChild(li);


    }
    

}

main();