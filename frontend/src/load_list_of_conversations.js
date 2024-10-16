import { fetchData } from './network_requests/fetch_data.js';
import { showEditAlert } from './custom-alert.js';
import { showDeleteAlert } from './custom-alert.js';
import { getUrl } from './get_url.js';

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

import { clearConversation } from './utils.js';
import { addDiv2Conversation } from './utils.js';

function addLiClickListener(li, currentValue) {
    li.addEventListener("click", async (event) => {

        // Fetch conversation data from the server
        const HOST_NAME = process.env.HOST_NAME;

        const endpointUrl = getUrl(`conversations/${currentValue._id}`);

        let conversation = await fetchData(endpointUrl);

        // Clear existing conversation content
        clearConversation();
        
        // Extract conversation from response
        conversation = conversation.response;

        // Populate conversation area with fetched data

        for (let item of conversation.conversation) {
            addDiv2Conversation(item.speaker, item.message, 0);
        }

    });
}


function clearConversationTitle(className, childSave){
    try{
        const parent = document.getElementsByClassName(className)[0];

        const children = parent.children;
        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            if (!child.classList.contains(childSave)) {
              parent.removeChild(child);
            }
          }
    } catch (error) {
        console.error('An error occurred during clearConversationTitle: ', error);
    }

}
export const loadConversationTitles = async function() {
    try {
        clearConversationTitle("list-of-conversations", "new-chat");
        const endpointUrl = getUrl('lists/list_of_titles');

        let conversationTitles;
        try {
            conversationTitles = await fetchData(endpointUrl);
        } catch (error) {
            console.error('Failed to fetch data: ', error);
            return;
        }

        // Remove all items from the list
        for (let value of conversationTitles.response) {
            let titleItem;
            try {
                titleItem = createTitleItem(value);
            } catch (error) {
                console.error('Failed to create title item: ', error);
                continue;
            }

            try {
                document.querySelector(".list-of-conversations").appendChild(titleItem);
            } catch (error) {
                console.error('Failed to append child: ', error);
            }
        }
    } catch (error) {
        console.error('An error occurred: ', error);
    }
}

