import React, { useEffect, useState, useRef } from 'react';
import './OpenLeftSideButton.css';

import { fetchData } from '../..//network_requests/fetch_data.js';
import { getUrl } from '../../get_url.js';


function GetChildren(data) {
    return React.Children.map(data, child => (
        <div className="dropdown-item">
            <p>{child}</p>
        </div>
    ))
}

function GetList({ isOpen, data }){
    if (isOpen) {
        return (
            <div className="dropdown-menu" >
                {GetChildren(data)}
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