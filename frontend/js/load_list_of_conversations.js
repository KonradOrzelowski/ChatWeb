function createTitleItem(currentValue){
    let titleItem = document.createElement("li");
    titleItem.innerHTML = `
        <a>${currentValue.title}</a>
        <div class = "bottoms-wrapper">
            <div class = "bottoms-transtion">
            </div>
            <div class = "bottoms">
                <img id="editIcon" src="assets/icons/edit-pen-icon.svg" alt="Icon description">
                <img id="deleteIcon" src="assets/icons/trash-bin-icon.svg" alt="Icon description">
            </div>
        </div>
        `
    const editIcon = titleItem.querySelector('#editIcon');
    const deleteIcon = titleItem.querySelector('#deleteIcon');
    
    addEditIconListener(editIcon, currentValue);
    addDeleteIconListener(deleteIcon, currentValue);
    
    titleItem.classList.add('conversation-title');

    addLiClickListener(titleItem, currentValue);

    return titleItem
}

function addEditIconListener(editIcon, currentValue) {
    editIcon.addEventListener("click", function() {
        showEditAlert(currentValue._id, currentValue.title);
    });
}

function addDeleteIconListener(deleteIcon, currentValue) {
    deleteIcon.addEventListener("click", function() {
        showDeleteAlert(currentValue._id, currentValue.title);
    });
}

function addLiClickListener(li, currentValue) {
    li.addEventListener("click", async (event) => {
        clear_conversation();
        
        let conversation = await fetchData(`http://localhost:3000/conversations/${currentValue._id}`);
        conversation = conversation.response;
        for(item of conversation.conversation){
            add_div_to_conversation(item.speaker, item.message, 0)
        }

    });
}

function clearConversationTitle(className, childSave){
    const parent = document.getElementsByClassName(className)[0];

    const children = parent.children;
    for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i];
        if (!child.classList.contains(childSave)) {
          parent.removeChild(child);
        }
      }
}

async function loadConversationTitles(){
    clearConversationTitle("list-of-conversations", "new-chat");
    const conversationTitles = await fetchData("http://localhost:3000/lists/list_of_titles");
    // Remove all items from the list
    

    for (let value of conversationTitles.response) {
        
        let titleItem = createTitleItem(value)      
        document.querySelector(".list-of-conversations").appendChild(titleItem);
        
    }
    

}