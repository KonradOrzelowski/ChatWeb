(()=>{var e={850:(e,t,n)=>{"use strict";var o=n(575);function s(e){let t=document.createElement("li");t.innerHTML=`\n        <a>${e.title}</a>\n        <div class = "bottoms-wrapper">\n            <div class = "bottoms-transtion">\n            </div>\n            <div class = "bottoms">\n                <img id="editIcon" src="assets/icons/edit-pen-icon.svg" alt="Icon description">\n                <img id="deleteIcon" src="assets/icons/trash-bin-icon.svg" alt="Icon description">\n            </div>\n        </div>\n        `;const n=t.querySelector("#editIcon"),s=t.querySelector("#deleteIcon");return function(e,t){e.addEventListener("click",(function(){showEditAlert(t._id,t.title)}))}(n,e),function(e,t){e.addEventListener("click",(function(){showDeleteAlert(t._id,t.title)}))}(s,e),t.classList.add("conversation-title"),function(e,t){e.addEventListener("click",(async e=>{let n=await(0,o.fetchData)(`http://${HOST_NAME}:3000/conversations/${t._id}`);for(item of(clear_conversation(),n=n.response,n.conversation))add_div_to_conversation(item.speaker,item.message,0)}))}(t,e),t}(e=n.hmd(e)).exports={loadConversationTitles:async function(){!function(e,t){const n=document.getElementsByClassName("list-of-conversations")[0],o=n.children;for(let e=o.length-1;e>=0;e--){const t=o[e];t.classList.contains("new-chat")||n.removeChild(t)}}();const e=await(0,o.fetchData)(`http://${HOST_NAME}:3000/lists/list_of_titles`);for(let t of e.response){let e=s(t);document.querySelector(".list-of-conversations").appendChild(e)}}}},575:e=>{e.exports={fetchData:async function(e){const t=await fetch(e);return await t.json()},postData:async function(e,t){return await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}}}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o](i,i.exports,n),i.loaded=!0,i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(850);document.getElementById("chat-input").addEventListener("keydown",(e=>{"Enter"===e.key&&(add_div_to_conversation("You",e.target.value),sendToServer(e.target.value),document.getElementById("chat-input").value="")})),document.getElementsByClassName("new-chat")[0].addEventListener("click",(e=>{sendNewChatSignal(),clear_conversation()})),(0,e.f)(),window.addEventListener("beforeunload",(function(e){closeWebsite()}))})()})();