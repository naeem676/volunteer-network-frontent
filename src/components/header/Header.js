
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from "../logos/Group 1329.png";
import './Header.css'

const Header = () => {
    const history = useHistory();
    const handleAdmin = ()=>{
        history.push('/admin')
    }
    return (
        <div className="header">
            <nav className="header-nav">
                <div><img className="header-logo" src={logo} alt="" srcset=""/></div>
                <div className="header-item">
                <p className="item-p">Home</p>
                <p className="item-p">Donation</p>
                <p className="item-p">Event</p>
                <p className="item-p">Blog</p>
                <button className="btn-register">Register</button>
                
                <button onClick={handleAdmin} className="btn-admin">Admin</button>
                </div>
            </nav>
            <div className="header-main">
                <h1> I GROW BY HELPING PEOPLE IN NEED.</h1>
                
                <input className="search-input" type="search" name="" id="" placeholder="Search...."/>
                <input className="submit-input" type="submit" value="Search"/>
            </div>
        </div>
    );
};

export default Header;