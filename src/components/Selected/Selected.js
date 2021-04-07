import React from 'react';
import logo from "../logos/Group 1329.png";
import './Selected.css'

const Selected = () => {
    return (
        <div className='selected'>
        <nav className="selected-nav">
                <div><img className="selected-logo" src={logo} alt="" srcset=""/></div>
                <div className="selected-item">
                <p className="selected-p">Home</p>
                <p className="selected-p">Donation</p>
                <p className="selected-p">Event</p>
                <p className="selected-p">Blog</p>
                </div>
            </nav>
            
        </div>
    );
};

export default Selected;