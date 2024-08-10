import React, { useEffect, useState, useRef } from 'react';
import './OpenLeftSideButton.css';

import { fetchData } from '../..//network_requests/fetch_data.js';
import { getUrl } from '../../get_url.js';


// function GetChildren(data) {
//     console.log(`Data in GetChildren: ${data[0].title}`);

//     return React.Children.map(data, (title, _id) => (
//         <div className="dropdown-item">
//             <p>{title}</p>
//         </div>
//     ))
// }

const ChildComponent = ({ title  }) => {
    return (
      <div>
        <a>${title}</a>
        <div class = "bottoms-wrapper">
            <div class = "bottoms-transtion">
            </div>
            <div class = "bottoms">
                <img id="editIcon" src="assets/icons/edit-pen-icon.svg" alt="Icon description"/>
                <img id="deleteIcon" src="assets/icons/trash-bin-icon.svg" alt="Icon description"/>
            </div>
        </div>
      </div>

    );
  };

function GetList({ isOpen, data }){
    const [conversationTitles, setConversationTitles] = useState(null);

    useEffect(() => {
        const _fetchData = async () => {
            const endpointUrl = getUrl('lists/list_of_titles');

            let listOfTitles = await fetchData(endpointUrl);
            listOfTitles = listOfTitles.response;
            
            console.log(listOfTitles);
            setConversationTitles(listOfTitles);
        };

        _fetchData();
    }, []);



    if (isOpen) {
        return (
            <div className="dropdown-menu" >
                {conversationTitles.map((item, index) => (
                    <ChildComponent key={index} title={item.title}/>
                ))}
            </div>
        )
    }else{
        return null;
    }
}

export function OpenLeftSideButton() {
    const [open, setOpen] = useState(false);

    let menuRef = useRef(null);
    
    useEffect(() => {
        const handler = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setOpen(false);
            }
            
        }
        document.addEventListener('mousedown', handler);
        if(open){
            document.getElementById('open-left-side').style.width = '20vw';
            document.getElementsByClassName('test-list')[0].style.width = '20vw';
            document.getElementsByClassName('overlay')[0].classList.add('active');
        }else{
            document.getElementById('open-left-side').style.width = '10vw';
            document.getElementsByClassName('test-list')[0].style.width = '10vw';
            document.getElementsByClassName('overlay')[0].classList.remove('active');
            
        }
    });

    var data = ['title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'title7', 'title8', 'title9', 'title10'];

    return (<div className="test-list" ref={menuRef}>
            <button className='test-button' onClick={() => setOpen(!open)}>Click me!</button>
            <GetList isOpen={open} data={data} />
        </div>);
}