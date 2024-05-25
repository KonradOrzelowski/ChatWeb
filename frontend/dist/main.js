/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/custom-alert.js":
/*!*****************************!*\
  !*** ./src/custom-alert.js ***!
  \*****************************/
/***/ (() => {

eval("function getCustomAlertWrapper(){\n    let customAlertWrapper = document.createElement('div');\n    customAlertWrapper.id = 'custom-alert-wrapper';\n    return customAlertWrapper\n}\n\n\n\n\nfunction showEditAlert(itemID, itemTitle) {\n\n    var contentDocument = document.getElementsByClassName(\"content\")[0];\n    let customAlert = document.createElement('div');\n    customAlert.id = 'custom-alert';\n\n    customAlert.innerHTML = `\n    <div id = \"custom-alert-upper\">\n        <p>Enter new title of chat</p>\n    </div>\n\n    <div id = \"custom-alert-bottom\">   \n        <div id = \"custom-alert-bottom-upper\">\n            <input type=\"text\" id=\"inputField\" value=\"${itemTitle}\">\n        </div>\n        \n        <div id = \"custom-alert-bottom-bottom\">\n            <button onclick=\"hideCustomAlert('custom-alert-wrapper-edit')\">Cancel</button>\n            <button onclick=\"sendEditAlert('${itemID}', 'custom-alert-wrapper-edit')\" id=\"button-accept\">Update</button>\n        </div>\n\n    </div>\n    `\n    var customAlertWrapper = getCustomAlertWrapper()\n    customAlertWrapper.classList.add('custom-alert-wrapper-edit');\n\n    customAlertWrapper.appendChild(customAlert)\n\n    document.body.appendChild(customAlertWrapper);\n}\n\n\nfunction showDeleteAlert(itemID, itemTitle) {\n    console.log(`\"showDeleteAlert ${itemID}\"`)\n\n    var contentDocument = document.getElementsByClassName(\"content\")[0];\n    let customAlert = document.createElement('div');\n    customAlert.id = 'custom-alert';\n\n    customAlert.innerHTML = `\n    <div id = \"custom-alert-upper\">\n        <p>Delete chat? </p>\n    </div>\n\n    <div id = \"custom-alert-bottom\">\n        <div id = \"custom-alert-bottom-upper\">\n            <p>This will delete <strong>${itemTitle}</strong>.</p>\n            \n        </div>\n\n        <div id = \"custom-alert-bottom-bottom\">\n            <button onclick=\"hideCustomAlert('custom-alert-wrapper-delete')\">Cancel</button>\n            <button onclick=\"sendDeleteAlert('${itemID}', 'custom-alert-wrapper-delete')\"id=\"button-delete\">Delete</button>\n        </div>\n    </div>\n    `\n    var customAlertWrapper = getCustomAlertWrapper()\n    customAlertWrapper.classList.add('custom-alert-wrapper-delete');\n\n    customAlertWrapper.appendChild(customAlert)\n    contentDocument.appendChild(customAlertWrapper);\n\n    \n}\n\nfunction hideCustomAlert(elementId) {\n\n    var customAlert = document.getElementsByClassName(elementId)[0];\n    if (customAlert) {\n        customAlert.remove();\n    }\n}\n\n\n\nfunction sendEditAlert(itemID, elementId){\n\n    var customAlert = document.getElementsByClassName(elementId)[0];\n    var childInput = customAlert.querySelector('input');\n    console.log(childInput.value)\n    \n    updateConversationTitle(itemID, childInput.value)\n    hideCustomAlert(elementId)\n\n}\n\n// showDeleteAlert(0, 'Style Delete Alert')\n// showEditAlert(0, 'Style Delete Alert')\n\nfunction sendDeleteAlert(itemID, elementId){\n    \n    deletePost(itemID)\n    hideCustomAlert(elementId)\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/custom-alert.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _network_requests_new_chat_created_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network_requests/new_chat_created.js */ \"./src/network_requests/new_chat_created.js\");\n/* harmony import */ var _network_requests_new_chat_created_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_network_requests_new_chat_created_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _network_requests_fetch_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network_requests/fetch_data.js */ \"./src/network_requests/fetch_data.js\");\n/* harmony import */ var _network_requests_close_website_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network_requests/close_website.js */ \"./src/network_requests/close_website.js\");\n/* harmony import */ var _network_requests_close_website_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_network_requests_close_website_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _network_requests_delete_post_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network_requests/delete_post.js */ \"./src/network_requests/delete_post.js\");\n/* harmony import */ var _network_requests_save_conversation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./network_requests/save_conversation.js */ \"./src/network_requests/save_conversation.js\");\n/* harmony import */ var _network_requests_save_conversation_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_network_requests_save_conversation_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _network_requests_update_conversation_title_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./network_requests/update_conversation_title.js */ \"./src/network_requests/update_conversation_title.js\");\n/* harmony import */ var _network_requests_update_conversation_title_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_network_requests_update_conversation_title_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _custom_alert_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-alert.js */ \"./src/custom-alert.js\");\n/* harmony import */ var _custom_alert_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_custom_alert_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _send_to_server_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./send_to_server.js */ \"./src/send_to_server.js\");\n/* harmony import */ var _send_to_server_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_send_to_server_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _load_list_of_conversations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./load_list_of_conversations.js */ \"./src/load_list_of_conversations.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n// index.js\n\n// Network requests\n\n\n\n\n\n\n\n// Utilities\n\n\n\n\n// Other scripts\n\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/load_list_of_conversations.js":
/*!*******************************************!*\
  !*** ./src/load_list_of_conversations.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadConversationTitles: () => (/* binding */ loadConversationTitles)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _network_requests_fetch_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network_requests/fetch_data.js */ \"./src/network_requests/fetch_data.js\");\nfunction createTitleItem(currentValue){\n    let titleItem = document.createElement(\"li\");\n    titleItem.innerHTML = `\n        <a>${currentValue.title}</a>\n        <div class = \"bottoms-wrapper\">\n            <div class = \"bottoms-transtion\">\n            </div>\n            <div class = \"bottoms\">\n                <img id=\"editIcon\" src=\"assets/icons/edit-pen-icon.svg\" alt=\"Icon description\">\n                <img id=\"deleteIcon\" src=\"assets/icons/trash-bin-icon.svg\" alt=\"Icon description\">\n            </div>\n        </div>\n        `\n    const editIcon = titleItem.querySelector('#editIcon');\n    const deleteIcon = titleItem.querySelector('#deleteIcon');\n    \n    addEditIconListener(editIcon, currentValue);\n    addDeleteIconListener(deleteIcon, currentValue);\n    \n    titleItem.classList.add('conversation-title');\n\n    addLiClickListener(titleItem, currentValue);\n\n    return titleItem\n}\n\nfunction addEditIconListener(editIcon, currentValue) {\n    editIcon.addEventListener(\"click\", function() {\n        showEditAlert(currentValue._id, currentValue.title);\n    });\n}\n\nfunction addDeleteIconListener(deleteIcon, currentValue) {\n    deleteIcon.addEventListener(\"click\", function() {\n        showDeleteAlert(currentValue._id, currentValue.title);\n    });\n}\n\n/**\n * Adds a click event listener to the specified list item (li) element.\n * This listener fetches conversation data from the server and populates the conversation area.\n * @param {HTMLElement} li - The list item element to which the click listener will be added.\n * @param {Object} currentValue - The current value associated with the list item, typically containing an '_id' property.\n */\n\n\nfunction addLiClickListener(li, currentValue) {\n    li.addEventListener(\"click\", async (event) => {\n\n        // Fetch conversation data from the server\n        let conversation = await (0,_network_requests_fetch_data_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)(`http://${HOST_NAME}:3000/conversations/${currentValue._id}`);\n\n        // Clear existing conversation content\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.clear_conversation)();\n        \n        // Extract conversation from response\n        conversation = conversation.response;\n\n        // Populate conversation area with fetched data\n        for (let item of conversation.conversation) {\n            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.add_div_to_conversation)(item.speaker, item.message, 0);\n        }\n\n    });\n}\n\n\nfunction clearConversationTitle(className, childSave){\n    const parent = document.getElementsByClassName(className)[0];\n\n    const children = parent.children;\n    for (let i = children.length - 1; i >= 0; i--) {\n        const child = children[i];\n        if (!child.classList.contains(childSave)) {\n          parent.removeChild(child);\n        }\n      }\n}\n\n\n\nconst loadConversationTitles = async function() {\n\n    clearConversationTitle(\"list-of-conversations\", \"new-chat\");\n    const conversationTitles = await (0,_network_requests_fetch_data_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)(`http://${HOST_NAME}:3000/lists/list_of_titles`);\n    // Remove all items from the list\n    \n\n    for (let value of conversationTitles.response) {\n        \n        let titleItem = createTitleItem(value)      \n        document.querySelector(\".list-of-conversations\").appendChild(titleItem);\n        \n    }\n    \n\n}\n\n//# sourceURL=webpack://frontend/./src/load_list_of_conversations.js?");

/***/ }),

/***/ "./src/network_requests/close_website.js":
/*!***********************************************!*\
  !*** ./src/network_requests/close_website.js ***!
  \***********************************************/
/***/ (() => {

eval("function closeWebsite(){\n    const url = `http://${HOST_NAME}:3000/is_closed`; // replace with your server's URL\n    const data = { is_closed: true }; // replace with the data you want to send\n\n    fetch(url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(data),\n    })\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch((error) => {\n        console.error('Error:', error);\n    });\n}\n\n//# sourceURL=webpack://frontend/./src/network_requests/close_website.js?");

/***/ }),

/***/ "./src/network_requests/delete_post.js":
/*!*********************************************!*\
  !*** ./src/network_requests/delete_post.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_list_of_conversations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../load_list_of_conversations */ \"./src/load_list_of_conversations.js\");\n\n\nfunction deletePost(itemID){\n\n    const uurl = `http://${HOST_NAME}:3000/delete_alert`;\n    const data = { message: itemID };\n\n    fetch(uurl, {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(data)\n    })\n    .then(response => {\n        if (response.ok) {\n            (0,_load_list_of_conversations__WEBPACK_IMPORTED_MODULE_0__.loadConversationTitles)();\n            console.log('Mgs from server: Rocket launched successfully!');\n        } else {\n            console.error('Failed to launched the rocket. Status:', response.status);\n        }\n        console.log(response.json())\n        \n    })\n    .catch(error => {\n        console.error('Error occurred while launching the rocket:', error);\n    });\n\n}\n\n//# sourceURL=webpack://frontend/./src/network_requests/delete_post.js?");

/***/ }),

/***/ "./src/network_requests/fetch_data.js":
/*!********************************************!*\
  !*** ./src/network_requests/fetch_data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData),\n/* harmony export */   postData: () => (/* binding */ postData)\n/* harmony export */ });\nconst fetchData = async function(url){\n    const response = await fetch(url);\n    const response_json = await response.json();\n    return response_json\n}\n\nconst postData = async function(url, data){\n    \n    const response = await fetch(url, {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(data)\n    });\n\n    return response\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/network_requests/fetch_data.js?");

/***/ }),

/***/ "./src/network_requests/new_chat_created.js":
/*!**************************************************!*\
  !*** ./src/network_requests/new_chat_created.js ***!
  \**************************************************/
/***/ (() => {

eval("function sendNewChatSignal() {\n\n    const url = `http://${HOST_NAME}:3000/refresh`;\n    const data = { chatCreated: true };\n\n    fetch(url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(data),\n    })\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch((error) => {\n        console.error('Error:', error);\n    });\n}\n\n//# sourceURL=webpack://frontend/./src/network_requests/new_chat_created.js?");

/***/ }),

/***/ "./src/network_requests/save_conversation.js":
/*!***************************************************!*\
  !*** ./src/network_requests/save_conversation.js ***!
  \***************************************************/
/***/ (() => {

eval("function saveConversation() {\n    const url = `http://${HOST_NAME}:3000/save_conversation`;\n    const data = { saveConversation: true };\n\n    console.log(data)\n\n    fetch(url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(data),\n    })\n    .then(response => {\n        response.json()\n        loadConversationTitles();\n    })\n    .catch((error) => {\n        console.error('Error:', error);\n    });\n    \n}\n\n//# sourceURL=webpack://frontend/./src/network_requests/save_conversation.js?");

/***/ }),

/***/ "./src/network_requests/update_conversation_title.js":
/*!***********************************************************!*\
  !*** ./src/network_requests/update_conversation_title.js ***!
  \***********************************************************/
/***/ (() => {

eval("function updateConversationTitle(itemID, newTitle) {\n\n    const url = `http://${HOST_NAME}:3000/update`;\n    const data = { updateTitle: true, itemID: itemID, newTitle: newTitle };\n    console.log(data);\n    fetch(url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(data),\n    })\n    .then(response => {\n        if (!response.ok) {\n            throw new Error('Network response was not ok');\n        }\n        return response.json(); // Assuming response is JSON\n    })\n    .then(data => {\n        if(data.response == true){\n            loadConversationTitles();\n        }\n    })\n    .catch((error) => {\n        console.error('Error:', error);\n    });\n    \n}\n\n//# sourceURL=webpack://frontend/./src/network_requests/update_conversation_title.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_list_of_conversations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load_list_of_conversations.js */ \"./src/load_list_of_conversations.js\");\n\n\ndocument.getElementById('chat-input').addEventListener('keydown', (event) => {\n    if (event.key === 'Enter') {\n        add_div_to_conversation('You', event.target.value)\n\n        sendToServer(event.target.value);\n\n        \n\n        document.getElementById('chat-input').value = \"\";\n\n    }\n});\n\nfunction add_click_to_new_chat() {\n    var new_chat = document.getElementsByClassName(\"new-chat\")[0];\n\n    new_chat.addEventListener(\"click\", (event) => {\n\n        sendNewChatSignal();\n        clear_conversation();\n        \n\n\n    });\n}\n\nadd_click_to_new_chat();\n(0,_load_list_of_conversations_js__WEBPACK_IMPORTED_MODULE_0__.loadConversationTitles)();\n\nwindow.addEventListener('beforeunload', function (event){\n    closeWebsite()\n});\n\n\n\n//# sourceURL=webpack://frontend/./src/script.js?");

/***/ }),

/***/ "./src/send_to_server.js":
/*!*******************************!*\
  !*** ./src/send_to_server.js ***!
  \*******************************/
/***/ (() => {

eval("function initIntervalId(){\n    const intervalId = setInterval(() => {\n        var elements = document.getElementsByClassName('div_conv');\n        var lastElement = elements[elements.length - 1];\n    \n        try{\n            var typing_0 = lastElement.getElementsByClassName('typing_0')[0];\n            typing_0.classList.remove(\"typing_0\");\n            typing_0.classList.add(\"typing_1\");\n        }catch(err){\n            var typing_1 = lastElement.getElementsByClassName('typing_1')[0];\n            typing_1.classList.remove(\"typing_1\");\n            typing_1.classList.add(\"typing_0\");\n        }\n    }, 500);\n\n    return intervalId;\n}\n\n\n\nfunction makeDivConv(speakerClass, speakerDiv){\n\n\n    const div_conv = document.createElement(\"div\");\n\n    div_conv.innerHTML =\n        `<div class=\"div_conv\">\n            <div class=\"owner\">\n                <div class=\"div_circle ${speakerDiv}\"></div>\n                ${speakerClass}\n                \n            </div>\n            <div class=\"${speakerClass} div_text\">\n                <div class=\"typing_0\">\n                </div>\n            </div>\n        </div>`\n\n    return div_conv;\n}\n\nconst sendToServer = async (msg) => {\n    const intervalId = initIntervalId();\n\n    const divConv = makeDivConv(speakerClass = 'ChatBot', speakerDiv = 'div_chatbot')\n    document.querySelector(\".conversation\").appendChild(divConv);\n\n    let data = { message: msg };\n    const postResponse = await postData(`http://${HOST_NAME}:3000/message`, data);\n    const text = await postResponse.json();\n    console.log(text.response.serverResponse);\n    const serverResponse = text.response.serverResponse;\n\n\n\n    // Clear the interval once the response is received\n    clearInterval(intervalId);\n\n    var elements = document.getElementsByClassName('div_conv');\n    var lastElement = elements[elements.length - 1];\n\n\n    var lastElement_div_text = lastElement.getElementsByClassName('div_text')[0];\n    lastElement_div_text.innerHTML = '';\n\n    type_text_to_div(lastElement_div_text, serverResponse, 50, 0)\n\n};\n\n//# sourceURL=webpack://frontend/./src/send_to_server.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add_div_to_conversation: () => (/* binding */ add_div_to_conversation),\n/* harmony export */   clear_conversation: () => (/* binding */ clear_conversation)\n/* harmony export */ });\n/**\n * Clears the conversation by removing all child elements from the conversation container.\n */\nconst clear_conversation = function(){\n    var divs = document.getElementsByClassName(\"conversation\");\n\n    for (var i = divs.length - 1; i >= 0; i--) {\n        var div = divs[i];\n        while (div.firstChild) {\n            div.removeChild(div.firstChild);\n        }\n    }\n}\n\n/**\n * Types text into a div element character by character with a specified delay.\n * @param {HTMLElement} element - The div element to type the text into.\n * @param {string} text - The text to be typed into the div element.\n * @param {number} time - The delay between typing each character (in milliseconds).\n * @param {number} counter - The current index of the character being typed.\n */\nfunction type_text_to_div(element, text, time, counter) {\n    if (counter < text.length) {\n        element.innerHTML += text.charAt(counter);\n        counter++;\n        setTimeout(function () {\n            type_text_to_div(element, text, time, counter);\n        }, time);\n        \n    }\n}\n\n\n/**\n * Adds a new div element to the conversation container with the specified speaker class, text, and optional time delay.\n * @param {string} speaker_class - The class name of the speaker.\n * @param {string} text - The text content to be displayed in the div.\n * @param {number} [time=50] - Optional time delay in milliseconds for typing effect.\n */\nconst add_div_to_conversation = function(speaker_class, text, time = 50){\n    const div_conv = document.createElement(\"div\");\n\n    var speaker_div = 'div_chatbot';\n    if(speaker_class == 'You'){\n        speaker_div = 'div_you'\n    }\n    \n    div_conv.innerHTML = \n        `<div class=\"div_conv\">\n        <div class=\"owner\">\n            <div class=\"div_circle ${speaker_div}\"></div>\n            ${speaker_class}\n            \n        </div>\n        <div class=\"${speaker_class} div_text\"></div>\n        </div>`\n\n    document.querySelector(\".conversation\").appendChild(div_conv);\n\n\n    var elements = document.getElementsByClassName('div_conv');\n    var lastElement = elements[elements.length - 1];\n\n\n    var lastElement_div_text = lastElement.getElementsByClassName('div_text')[0];   \n\n    if(time == 0){\n        lastElement_div_text.innerHTML = text;\n    }else if(speaker_class == \"ChatBot\"){\n        type_text_to_div(lastElement_div_text, text, time, 0)\n    }else{\n        lastElement_div_text.innerHTML = text;\n    }\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;