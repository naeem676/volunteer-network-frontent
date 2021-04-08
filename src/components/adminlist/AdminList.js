import React from 'react';
import trash from "../logos/trash-2 9.png";
import './AdminList.css';

const AdminList = (props) => {
    const {name, email, organization, date} = props.admin;
    const adminDelete = (id) =>{
        fetch('http://localhost:4000/delete/' + id,{
            method:"DELETE"
        })
    }
    return (
        <div className="all-admin">
            <div className="admin-list">
                <div className="admin-name">
                    <p>{name}</p>
                </div>
                <div className="admin-email">
                    <p>{email}</p>
                </div>
                <div className="admin-date">
                    <p>{date}</p>
                </div>
                <div className="admin-organization">
                    <p>{organization}</p>
                </div>
                <div className="admin-img">
                    <p><img onClick={()=>adminDelete(props.admin._id)} className="trash-logo" src={trash} alt="" srcset=""/></p>
                </div>
            </div>
        </div>
    );
};

export default AdminList;