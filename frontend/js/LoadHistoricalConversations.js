// fetch(file)
// .then(x => x.text())
// .then(y => myDisplay(y));

// const { add_div_to_conversation } = require('./utils');

async function get_data(url) {
    const response = await fetch(url);
    const response_json = await response.json();
    return response_json
}


async function main(){
    const list_of_titles = await get_data("http://localhost:3000/conversations/list_of_titles");
    const list_of_convs = await get_data("http://localhost:3000/conversations/list_of_convs");

    for (let value of list_of_titles.response) {

        let li = document.createElement("li");
        let link = document.createElement("a");
        
        link.textContent = value.title;
        li.appendChild(link);
        // li.innerHTML = `<a>${value.title}</a>`;
        li.classList.add('conversation_title');

        li.addEventListener("click", (event) => {
            // conversation

            var divs = document.getElementsByClassName("conversation");

            for (var i = divs.length - 1; i >= 0; i--) {
                var div = divs[i];
                while (div.firstChild) {
                    div.removeChild(div.firstChild);
                }
            }

            for(item of list_of_convs.response[value.index].conversation){
                add_div_to_conversation(item.speaker, item.message)
            }
            

            // console.log(list_of_convs.response[0].conversation)
            
          });

        document.querySelector(".historical-conversations").appendChild(li);

    }
    

}
console.log('Load LoadHistoricalConversations.js')
main();