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
        let link = document.createElement("a");
        
        link.textContent = value.title;
        li.appendChild(link);
        li.classList.add('conversation_title');

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
        
        document.querySelector(".historical-conversations").appendChild(li);


    }
    

}
console.log('Load LoadHistoricalConversations.js')
main();