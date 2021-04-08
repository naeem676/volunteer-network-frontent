import React, { useEffect, useState } from 'react';
import logo from "../logos/Group 1329.png";
import users from "../logos/users-alt 1.png";
import plus from "../logos/plus 1.png";
import './Admin.css'
import { Link } from 'react-router-dom';
import AdminList from '../adminlist/AdminList';

const Admin = () => {
    const [allAdmin, setAllAdmin] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/allAdmin')
        .then(res => res.json())
        .then(data => setAllAdmin(data))
    }, [])
    return (
        <div className="admin">
            <div className="admin-main">
                <div className="admin-left">
                   <div> <img className="admin-logo" src={logo} alt="" srcset=""/></div>
                    <div className="left-div">
                    <Link style={{textDecoration:'none'}}><img className="users-logo" src={users} alt="" srcset=""/> volunteer register list</Link>
                   <p> <Link className="add-link"><img className="plus-logo" src={plus} alt="" srcset=""/> add event</Link></p>
                    </div>
                </div>
                <div className="admin-right">
                    <div><h2>Volunteer list</h2></div>
                    <div className="admin-area">
                        <div className="list-colum">
                            <p className="colum-name">Name</p>
                            <p className="colum-p">Email</p>
                            <p className="colum-p">Date</p>
                            <p className="colum-volunteer">Volunteer list</p>
                            <p className="colum-action">Action</p>
                        </div>
                        <div>
                        {
                            allAdmin.map(admin => <AdminList admin={admin} key={admin._id}></AdminList>)
                        }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;