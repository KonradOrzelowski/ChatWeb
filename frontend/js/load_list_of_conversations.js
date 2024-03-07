

function clickHandler(event) {
    displayStyle = document.getElementById('custom-alert').style.display;
    clickOnCustomAlert = document.getElementById('custom-alert').contains(event.target);

    console.log(`displayStyle: ${displayStyle}
                clickOnCustomAlert ${clickOnCustomAlert}
                firstClick ${firstClick}
                bool ${(displayStyle != 'none') & !clickOnCustomAlert & firstClick}
                `)
                
    if ((displayStyle != 'none') & !clickOnCustomAlert & !firstClick) {
        hideCustomAlert();
    }
}

async function main(){
    const list_of_titles = await fetchData("http://localhost:3000/lists/list_of_titles");
    const list_of_convs = await fetchData("http://localhost:3000/lists/list_of_convs");

    for (let value of list_of_titles.response) {

        let currentValue = value;

        let li = document.createElement("li");
        li.innerHTML = `
            <a>${value.title}</a>
            <div class = "bottoms-wrapper">
                <div class = "bottoms-transtion">
                </div>
                <div class = "bottoms">
                    <img id="editIcon" src="assets/icons/edit-pen-icon.svg" alt="Icon description">
                    <img id="deleteIcon" src="assets/icons/trash-bin-icon.svg" alt="Icon description">
                </div>
            </div>
            `
        const editIcon = li.querySelector('#editIcon');
        const deleteIcon = li.querySelector('#deleteIcon');
        
        editIcon.addEventListener("click", function() {
            showEditAlert(currentValue._id, currentValue.title);
        });

        deleteIcon.addEventListener("click", function() {
            showDeleteAlert(currentValue._id, currentValue.title);
        });
        
        li.classList.add('conversation-title');

       

        li.addEventListener("click", async (event) => {
            console.log("Before fetchData:", currentValue._id);
            clear_conversation();
            
            let conversation = await fetchData(`http://localhost:3000/conversations/${currentValue._id}`);
            conversation = conversation.response;
            console.log(currentValue._id)
            for(item of conversation.conversation){
                add_div_to_conversation(item.speaker, item.message, 0)
            }

        });

        
        document.querySelector(".list-of-conversations").appendChild(li);


    }
    

}

main();