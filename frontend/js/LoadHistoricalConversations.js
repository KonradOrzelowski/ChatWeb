// fetch(file)
// .then(x => x.text())
// .then(y => myDisplay(y));


async function get_data(url) {
    const response = await fetch(url);
    const response_json = await response.json();
    return response_json
}


async function main(){
    const list_of_titles = await get_data("http://localhost:3000/conversations/list_of_titles");

    for (let value of list_of_titles.response) {

        let li = document.createElement("li");

        li.innerHTML = value.title;
        li.classList.add('conversation_title');

        document.querySelector(".historical-conversations").appendChild(li);

        console.log(value.title);
    }
    

}
console.log('Load LoadHistoricalConversations.js')
main();