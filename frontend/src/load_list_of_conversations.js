import { fetchData } from './network_requests/fetch_data.js';
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

/**
 * Adds a click event listener to the specified list item (li) element.
 * This listener fetches conversation data from the server and populates the conversation area.
 * @param {HTMLElement} li - The list item element to which the click listener will be added.
 * @param {Object} currentValue - The current value associated with the list item, typically containing an '_id' property.
 */

import { clear_conversation } from './utils.js';
import { addDiv2Conversation } from './utils.js';

function addLiClickListener(li, currentValue) {
    li.addEventListener("click", async (event) => {

        // Fetch conversation data from the server
        const HOST_NAME = process.env.HOST_NAME;
        let conversation = await fetchData(`http://${HOST_NAME}:3000/conversations/${currentValue._id}`);

        // Clear existing conversation content
        clear_conversation();
        
        // Extract conversation from response
        conversation = conversation.response;

        // Populate conversation area with fetched data

        for (let item of conversation.conversation) {
            addDiv2Conversation(item.speaker, item.message, 0);
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
export const loadConversationTitles = async function() {
    clearConversationTitle("list-of-conversations", "new-chat");
    const HOST_NAME = process.env.HOST_NAME;
    const conversationTitles = await fetchData(`http://${HOST_NAME}:3000/lists/list_of_titles`);
    // Remove all items from the list
    

    for (let value of conversationTitles.response) {
        
        let titleItem = createTitleItem(value)      
        document.querySelector(".list-of-conversations").appendChild(titleItem);
        
    }
}

