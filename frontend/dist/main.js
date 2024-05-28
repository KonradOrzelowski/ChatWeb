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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _network_requests_new_chat_created_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network_requests/new_chat_created.js */ \"./src/network_requests/new_chat_created.js\");\n/* harmony import */ var _network_requests_fetch_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network_requests/fetch_data.js */ \"./src/network_requests/fetch_data.js\");\n/* harmony import */ var _network_requests_close_website_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network_requests/close_website.js */ \"./src/network_requests/close_website.js\");\n/* harmony import */ var _network_requests_close_website_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_network_requests_close_website_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _network_requests_delete_post_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network_requests/delete_post.js */ \"./src/network_requests/delete_post.js\");\n/* harmony import */ var _network_requests_save_conversation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./network_requests/save_conversation.js */ \"./src/network_requests/save_conversation.js\");\n/* harmony import */ var _network_requests_save_conversation_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_network_requests_save_conversation_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _network_requests_update_conversation_title_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./network_requests/update_conversation_title.js */ \"./src/network_requests/update_conversation_title.js\");\n/* harmony import */ var _network_requests_update_conversation_title_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_network_requests_update_conversation_title_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _custom_alert_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-alert.js */ \"./src/custom-alert.js\");\n/* harmony import */ var _custom_alert_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_custom_alert_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _send_to_server_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./send_to_server.js */ \"./src/send_to_server.js\");\n/* harmony import */ var _load_list_of_conversations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./load_list_of_conversations.js */ \"./src/load_list_of_conversations.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n// index.js\n\n// Network requests\n\n\n\n\n\n\n\n// Utilities\n\n\n\n\n// Other scripts\n\n\n\nconsole.log('HOST_NAME: ', {\"GJS_DEBUG_TOPICS\":\"JS ERROR;JS LOG\",\"LESSOPEN\":\"| /usr/bin/lesspipe %s\",\"USER\":\"cm\",\"LC_TIME\":\"en_GB.UTF-8\",\"npm_config_user_agent\":\"npm/10.5.0 node/v20.12.2 linux x64 workspaces/false\",\"XDG_SESSION_TYPE\":\"x11\",\"GIT_ASKPASS\":\"/usr/share/code/resources/app/extensions/git/dist/askpass.sh\",\"npm_node_execpath\":\"/home/cm/.nvm/versions/node/v20.12.2/bin/node\",\"SHLVL\":\"1\",\"npm_config_noproxy\":\"\",\"HOME\":\"/home/cm\",\"CHROME_DESKTOP\":\"code-url-handler.desktop\",\"TERM_PROGRAM_VERSION\":\"1.88.1\",\"DESKTOP_SESSION\":\"ubuntu\",\"NVM_BIN\":\"/home/cm/.nvm/versions/node/v20.12.2/bin\",\"npm_package_json\":\"/home/cm/Documents/githubCode/ChatWeb/frontend/package.json\",\"NVM_INC\":\"/home/cm/.nvm/versions/node/v20.12.2/include/node\",\"GIO_LAUNCHED_DESKTOP_FILE\":\"/usr/share/applications/code.desktop\",\"GNOME_SHELL_SESSION_MODE\":\"ubuntu\",\"GTK_MODULES\":\"gail:atk-bridge\",\"VSCODE_GIT_ASKPASS_MAIN\":\"/usr/share/code/resources/app/extensions/git/dist/askpass-main.js\",\"LC_MONETARY\":\"en_GB.UTF-8\",\"VSCODE_GIT_ASKPASS_NODE\":\"/usr/share/code/code\",\"MANAGERPID\":\"873\",\"npm_config_userconfig\":\"/home/cm/.npmrc\",\"npm_config_local_prefix\":\"/home/cm/Documents/githubCode/ChatWeb/frontend\",\"SYSTEMD_EXEC_PID\":\"1338\",\"DBUS_SESSION_BUS_ADDRESS\":\"unix:path=/run/user/1000/bus\",\"COLORTERM\":\"truecolor\",\"GIO_LAUNCHED_DESKTOP_FILE_PID\":\"4095\",\"COLOR\":\"1\",\"NVM_DIR\":\"/home/cm/.nvm\",\"GTK_IM_MODULE\":\"ibus\",\"LOGNAME\":\"cm\",\"JOURNAL_STREAM\":\"8:28374\",\"_\":\"/home/cm/.nvm/versions/node/v20.12.2/bin/npm\",\"npm_config_prefix\":\"/home/cm/.nvm/versions/node/v20.12.2\",\"npm_config_npm_version\":\"10.5.0\",\"XDG_SESSION_CLASS\":\"user\",\"USERNAME\":\"cm\",\"TERM\":\"xterm-256color\",\"npm_config_cache\":\"/home/cm/.npm\",\"GNOME_DESKTOP_SESSION_ID\":\"this-is-deprecated\",\"WINDOWPATH\":\"2\",\"npm_config_node_gyp\":\"/home/cm/.nvm/versions/node/v20.12.2/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js\",\"PATH\":\"/home/cm/Documents/githubCode/ChatWeb/frontend/node_modules/.bin:/home/cm/Documents/githubCode/ChatWeb/node_modules/.bin:/home/cm/Documents/githubCode/node_modules/.bin:/home/cm/Documents/node_modules/.bin:/home/cm/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/cm/.nvm/versions/node/v20.12.2/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/cm/.nvm/versions/node/v20.12.2/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin\",\"SESSION_MANAGER\":\"local/cm-computer:@/tmp/.ICE-unix/1314,unix/cm-computer:/tmp/.ICE-unix/1314\",\"INVOCATION_ID\":\"f258614749e74004b685b9a77af2a52a\",\"PAPERSIZE\":\"a4\",\"NODE\":\"/home/cm/.nvm/versions/node/v20.12.2/bin/node\",\"npm_package_name\":\"frontend\",\"XDG_MENU_PREFIX\":\"gnome-\",\"LC_ADDRESS\":\"en_GB.UTF-8\",\"XDG_RUNTIME_DIR\":\"/run/user/1000\",\"GDK_BACKEND\":\"x11\",\"DISPLAY\":\":0\",\"LANG\":\"en_US.UTF-8\",\"XDG_CURRENT_DESKTOP\":\"Unity\",\"LC_TELEPHONE\":\"en_GB.UTF-8\",\"XMODIFIERS\":\"@im=ibus\",\"XDG_SESSION_DESKTOP\":\"ubuntu\",\"XAUTHORITY\":\"/run/user/1000/gdm/Xauthority\",\"LS_COLORS\":\"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:\",\"VSCODE_GIT_IPC_HANDLE\":\"/run/user/1000/vscode-git-06d78d2f32.sock\",\"TERM_PROGRAM\":\"vscode\",\"npm_lifecycle_script\":\"webpack\",\"SSH_AGENT_LAUNCHER\":\"gnome-keyring\",\"SSH_AUTH_SOCK\":\"/run/user/1000/keyring/ssh\",\"ORIGINAL_XDG_CURRENT_DESKTOP\":\"ubuntu:GNOME\",\"SHELL\":\"/bin/bash\",\"LC_NAME\":\"en_GB.UTF-8\",\"npm_package_version\":\"1.0.0\",\"npm_lifecycle_event\":\"build\",\"QT_ACCESSIBILITY\":\"1\",\"GDMSESSION\":\"ubuntu\",\"LESSCLOSE\":\"/usr/bin/lesspipe %s %s\",\"LC_MEASUREMENT\":\"en_GB.UTF-8\",\"GPG_AGENT_INFO\":\"/run/user/1000/gnupg/S.gpg-agent:0:1\",\"GJS_DEBUG_OUTPUT\":\"stderr\",\"LC_IDENTIFICATION\":\"en_GB.UTF-8\",\"VSCODE_GIT_ASKPASS_EXTRA_ARGS\":\"\",\"QT_IM_MODULE\":\"ibus\",\"npm_config_globalconfig\":\"/home/cm/.nvm/versions/node/v20.12.2/etc/npmrc\",\"npm_config_init_module\":\"/home/cm/.npm-init.js\",\"PWD\":\"/home/cm/Documents/githubCode/ChatWeb/frontend\",\"npm_execpath\":\"/home/cm/.nvm/versions/node/v20.12.2/lib/node_modules/npm/bin/npm-cli.js\",\"XDG_CONFIG_DIRS\":\"/etc/xdg/xdg-ubuntu:/etc/xdg\",\"NVM_CD_FLAGS\":\"\",\"XDG_DATA_DIRS\":\"/usr/share/ubuntu:/usr/share/gnome:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop\",\"npm_config_global_prefix\":\"/home/cm/.nvm/versions/node/v20.12.2\",\"LC_NUMERIC\":\"en_GB.UTF-8\",\"npm_command\":\"run-script\",\"LC_PAPER\":\"en_GB.UTF-8\",\"INIT_CWD\":\"/home/cm/Documents/githubCode/ChatWeb/frontend\",\"EDITOR\":\"vi\"}.HOST_NAME);\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/load_list_of_conversations.js":
/*!*******************************************!*\
  !*** ./src/load_list_of_conversations.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadConversationTitles: () => (/* binding */ loadConversationTitles)\n/* harmony export */ });\n/* harmony import */ var _network_requests_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network_requests/fetch_data.js */ \"./src/network_requests/fetch_data.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction createTitleItem(currentValue){\n    let titleItem = document.createElement(\"li\");\n    titleItem.innerHTML = `\n        <a>${currentValue.title}</a>\n        <div class = \"bottoms-wrapper\">\n            <div class = \"bottoms-transtion\">\n            </div>\n            <div class = \"bottoms\">\n                <img id=\"editIcon\" src=\"assets/icons/edit-pen-icon.svg\" alt=\"Icon description\">\n                <img id=\"deleteIcon\" src=\"assets/icons/trash-bin-icon.svg\" alt=\"Icon description\">\n            </div>\n        </div>\n        `\n    const editIcon = titleItem.querySelector('#editIcon');\n    const deleteIcon = titleItem.querySelector('#deleteIcon');\n    \n    addEditIconListener(editIcon, currentValue);\n    addDeleteIconListener(deleteIcon, currentValue);\n    \n    titleItem.classList.add('conversation-title');\n\n    addLiClickListener(titleItem, currentValue);\n\n    return titleItem\n}\n\nfunction addEditIconListener(editIcon, currentValue) {\n    editIcon.addEventListener(\"click\", function() {\n        showEditAlert(currentValue._id, currentValue.title);\n    });\n}\n\nfunction addDeleteIconListener(deleteIcon, currentValue) {\n    deleteIcon.addEventListener(\"click\", function() {\n        showDeleteAlert(currentValue._id, currentValue.title);\n    });\n}\n\n/**\n * Adds a click event listener to the specified list item (li) element.\n * This listener fetches conversation data from the server and populates the conversation area.\n * @param {HTMLElement} li - The list item element to which the click listener will be added.\n * @param {Object} currentValue - The current value associated with the list item, typically containing an '_id' property.\n */\n\n\n\n\nfunction addLiClickListener(li, currentValue) {\n    li.addEventListener(\"click\", async (event) => {\n\n        // Fetch conversation data from the server\n        let conversation = await (0,_network_requests_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(`http://${HOST_NAME}:3000/conversations/${currentValue._id}`);\n\n        // Clear existing conversation content\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.clear_conversation)();\n        \n        // Extract conversation from response\n        conversation = conversation.response;\n\n        // Populate conversation area with fetched data\n\n        for (let item of conversation.conversation) {\n            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.addDiv2Conversation)(item.speaker, item.message, 0);\n        }\n\n    });\n}\n\n\nfunction clearConversationTitle(className, childSave){\n    const parent = document.getElementsByClassName(className)[0];\n\n    const children = parent.children;\n    for (let i = children.length - 1; i >= 0; i--) {\n        const child = children[i];\n        if (!child.classList.contains(childSave)) {\n          parent.removeChild(child);\n        }\n      }\n}\nconst loadConversationTitles = async function() {\n    clearConversationTitle(\"list-of-conversations\", \"new-chat\");\n    const conversationTitles = await (0,_network_requests_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(`http://${HOST_NAME}:3000/lists/list_of_titles`);\n    // Remove all items from the list\n    \n\n    for (let value of conversationTitles.response) {\n        \n        let titleItem = createTitleItem(value)      \n        document.querySelector(\".list-of-conversations\").appendChild(titleItem);\n        \n    }\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/load_list_of_conversations.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_list_of_conversations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../load_list_of_conversations */ \"./src/load_list_of_conversations.js\");\n\nfunction deletePost(itemID){\n\n    const uurl = `http://${HOST_NAME}:3000/delete_alert`;\n    const data = { message: itemID };\n\n    fetch(uurl, {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(data)\n    })\n    .then(response => {\n        if (response.ok) {\n            (0,_load_list_of_conversations__WEBPACK_IMPORTED_MODULE_0__.loadConversationTitles)();\n            console.log('Mgs from server: Rocket launched successfully!');\n        } else {\n            console.error('Failed to launched the rocket. Status:', response.status);\n        }\n        console.log(response.json())\n        \n    })\n    .catch(error => {\n        console.error('Error occurred while launching the rocket:', error);\n    });\n\n}\n\n//# sourceURL=webpack://frontend/./src/network_requests/delete_post.js?");

/***/ }),

/***/ "./src/network_requests/fetch_data.js":
/*!********************************************!*\
  !*** ./src/network_requests/fetch_data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData),\n/* harmony export */   postData: () => (/* binding */ postData)\n/* harmony export */ });\n\nconst fetchData = async function(url){\n\n    const response = await fetch(url);\n    const response_json = await response.json();\n    return response_json\n}\n\nconst postData = async function(url, data){\n\n    \n    const response = await fetch(url, {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(data)\n    });\n\n    return response\n}\n\n\n//# sourceURL=webpack://frontend/./src/network_requests/fetch_data.js?");

/***/ }),

/***/ "./src/network_requests/new_chat_created.js":
/*!**************************************************!*\
  !*** ./src/network_requests/new_chat_created.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendNewChatSignal: () => (/* binding */ sendNewChatSignal)\n/* harmony export */ });\nconst sendNewChatSignal = function() {\n    const url = `http://${HOST_NAME}:3000/refresh`;\n    const data = { chatCreated: true };\n\n    fetch(url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(data),\n    })\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch((error) => {\n        console.error('Error:', error);\n    });\n}\n\n//# sourceURL=webpack://frontend/./src/network_requests/new_chat_created.js?");

/***/ }),

/***/ "./src/network_requests/save_conversation.js":
/*!***************************************************!*\
  !*** ./src/network_requests/save_conversation.js ***!
  \***************************************************/
/***/ (() => {

eval("function saveConversation() {\n    const url = `http://${HOST_NAME}:3000/save_conversation`;\n    const data = { saveConversation: true };\n\n    console.log(data)\n\n    fetch(url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(data),\n    })\n    .then(response => {\n        response.json()\n        loadConversationTitles();\n    })\n    .catch((error) => {\n        console.error('Error:', error);\n    });\n    \n}\n// Define the saveConversation function in the global scope\nwindow.saveConversation = saveConversation;\n\n\n//# sourceURL=webpack://frontend/./src/network_requests/save_conversation.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_list_of_conversations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load_list_of_conversations.js */ \"./src/load_list_of_conversations.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _send_to_server_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send_to_server.js */ \"./src/send_to_server.js\");\n/* harmony import */ var _network_requests_new_chat_created_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network_requests/new_chat_created.js */ \"./src/network_requests/new_chat_created.js\");\n\n\n\n\ndocument.getElementById('chat-input').addEventListener('keydown', (event) => {\n    if (event.key === 'Enter') {\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.addDiv2Conversation)('You', event.target.value)\n\n        ;(0,_send_to_server_js__WEBPACK_IMPORTED_MODULE_2__.sendToServer)(event.target.value);\n\n        \n\n        document.getElementById('chat-input').value = \"\";\n\n    }\n});\n\n\nfunction add_click_to_new_chat() {\n    var new_chat = document.getElementsByClassName(\"new-chat\")[0];\n\n    new_chat.addEventListener(\"click\", (event) => {\n\n        (0,_network_requests_new_chat_created_js__WEBPACK_IMPORTED_MODULE_3__.sendNewChatSignal)();\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.clear_conversation)();\n        \n\n\n    });\n}\n\nadd_click_to_new_chat();\n(0,_load_list_of_conversations_js__WEBPACK_IMPORTED_MODULE_0__.loadConversationTitles)();\n\nwindow.addEventListener('beforeunload', function (event){\n    closeWebsite()\n});\n\n\n\n//# sourceURL=webpack://frontend/./src/script.js?");

/***/ }),

/***/ "./src/send_to_server.js":
/*!*******************************!*\
  !*** ./src/send_to_server.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendToServer: () => (/* binding */ sendToServer)\n/* harmony export */ });\n/* harmony import */ var _network_requests_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network_requests/fetch_data.js */ \"./src/network_requests/fetch_data.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nfunction initIntervalId(){\n    const intervalId = setInterval(() => {\n        var elements = document.getElementsByClassName('div_conv');\n        var lastElement = elements[elements.length - 1];\n    \n        try{\n            var typing_0 = lastElement.getElementsByClassName('typing_0')[0];\n            typing_0.classList.remove(\"typing_0\");\n            typing_0.classList.add(\"typing_1\");\n        }catch(err){\n            var typing_1 = lastElement.getElementsByClassName('typing_1')[0];\n            typing_1.classList.remove(\"typing_1\");\n            typing_1.classList.add(\"typing_0\");\n        }\n    }, 500);\n\n    return intervalId;\n}\n\n\n\nfunction makeDivConv(speakerClass, speakerDiv){\n\n\n    const div_conv = document.createElement(\"div\");\n\n    div_conv.innerHTML =\n        `<div class=\"div_conv\">\n            <div class=\"owner\">\n                <div class=\"div_circle ${speakerDiv}\"></div>\n                ${speakerClass}\n                \n            </div>\n            <div class=\"${speakerClass} div_text\">\n                <div class=\"typing_0\">\n                </div>\n            </div>\n        </div>`\n\n    return div_conv;\n}\n\n\n\nconst sendToServer = async function(msg) {\n    const intervalId = initIntervalId();\n\n    const divConv = makeDivConv('ChatBot', 'div_chatbot')\n    document.querySelector(\".conversation\").appendChild(divConv);\n\n    let data = { message: msg };\n    const postResponse = await (0,_network_requests_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.postData)(`http://${HOST_NAME}:3000/message`, data);\n    const text = await postResponse.json();\n    console.log(text.response.serverResponse);\n    const serverResponse = text.response.serverResponse;\n\n\n\n    // Clear the interval once the response is received\n    clearInterval(intervalId);\n\n    var elements = document.getElementsByClassName('div_conv');\n    var lastElement = elements[elements.length - 1];\n\n\n    var lastElement_div_text = lastElement.getElementsByClassName('div_text')[0];\n    lastElement_div_text.innerHTML = '';\n\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.typeTextToDiv)(lastElement_div_text, serverResponse, 50, 0)\n\n};\n\n//# sourceURL=webpack://frontend/./src/send_to_server.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDiv2Conversation: () => (/* binding */ addDiv2Conversation),\n/* harmony export */   clear_conversation: () => (/* binding */ clear_conversation),\n/* harmony export */   typeTextToDiv: () => (/* binding */ typeTextToDiv)\n/* harmony export */ });\n/**\n * Clears the conversation by removing all child elements from the conversation container.\n */\nconst clear_conversation = function(){\n    var divs = document.getElementsByClassName(\"conversation\");\n\n    for (var i = divs.length - 1; i >= 0; i--) {\n        var div = divs[i];\n        while (div.firstChild) {\n            div.removeChild(div.firstChild);\n        }\n    }\n}\n\n/**\n * Types text into a div element character by character with a specified delay.\n * @param {HTMLElement} element - The div element to type the text into.\n * @param {string} text - The text to be typed into the div element.\n * @param {number} time - The delay between typing each character (in milliseconds).\n * @param {number} counter - The current index of the character being typed.\n */\nconst typeTextToDiv = function(element, text, time, counter){\n    if (counter < text.length) {\n        element.innerHTML += text.charAt(counter);\n        counter++;\n        setTimeout(function () {\n            typeTextToDiv(element, text, time, counter);\n        }, time);\n        \n    }\n}\n\n\n/**\n * Adds a new div element to the conversation container with the specified speaker class, text, and optional time delay.\n * @param {string} speaker_class - The class name of the speaker.\n * @param {string} text - The text content to be displayed in the div.\n * @param {number} [time=50] - Optional time delay in milliseconds for typing effect.\n */\nconst addDiv2Conversation = function(speaker_class, text, time = 50){\n    const div_conv = document.createElement(\"div\");\n\n    var speaker_div = 'div_chatbot';\n    if(speaker_class == 'You'){\n        speaker_div = 'div_you'\n    }\n    \n    div_conv.innerHTML = \n        `<div class=\"div_conv\">\n        <div class=\"owner\">\n            <div class=\"div_circle ${speaker_div}\"></div>\n            ${speaker_class}\n            \n        </div>\n        <div class=\"${speaker_class} div_text\"></div>\n        </div>`\n\n    document.querySelector(\".conversation\").appendChild(div_conv);\n\n\n    var elements = document.getElementsByClassName('div_conv');\n    var lastElement = elements[elements.length - 1];\n\n\n    var lastElement_div_text = lastElement.getElementsByClassName('div_text')[0];   \n\n    if(time == 0){\n        lastElement_div_text.innerHTML = text;\n    }else if(speaker_class == \"ChatBot\"){\n        typeTextToDiv(lastElement_div_text, text, time, 0)\n    }else{\n        lastElement_div_text.innerHTML = text;\n    }\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/utils.js?");

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