import React, { useEffect, useState } from 'react';
import logo from "../logos/Group 1329.png";
import users from "../logos/users-alt 1.png";
import plus from "../logos/plus 1.png";
import './Admin.css';
import AdminList from '../adminlist/AdminList';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Admin = () => {
    const [event, setEvent] = useState({ name:'', description:'', key: '', photo:''})
    const [list, setList] = useState(true);
    const [form, setForm] = useState(false)
    const [allAdmin, setAllAdmin] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/allAdmin')
        .then(res => res.json())
        .then(data => setAllAdmin(data))
    }, [allAdmin]);

    const handleList = ()=>{
        setList(true)
        setForm(false)
    };
    const handleForm = () =>{
        setList(false)
        setForm(true)
    }
    const handleOnBlur = e =>{
        const newEvent = {...event}
            newEvent[e.target.name] = e.target.value;
            setEvent(newEvent)

    }
    const handleSubmit = e =>{
        const newEvent = {...event}
        console.log(newEvent)
        fetch('http://localhost:4000/addOptions', {
            method:"POST",
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('data send')
            }
        })
        e.preventDefault()
    }
    return (
        <div className="admin">
            <div className="admin-main">
                <div className="admin-left">
                   <div> <img className="admin-logo" src={logo} alt="" srcset=""/></div>
                    <div className="left-div">
                    <Link onClick={handleList} component="button" variant="body2" style={{textDecoration:'none'}}><img className="users-logo" src={users} alt="" srcset=""/> volunteer register list</Link>
                    <Link style={{textDecoration:'none'}} onClick={handleForm} component="button" variant="body2" className="add-link"> <p className='event-link'> <img className="plus-logo" src={plus} alt="" srcset=""/> add event</p></Link>
                    </div>
                </div>
               { list && <div className="admin-right">
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
                </div>}
                {form && <div className="admin-right">
                <div><h2>Add event</h2></div>
                <div className="form-area">
                    <div className="form-div">
                    <form onSubmit={handleSubmit} >
                   <div className="from-main">
                   <div>
                   <div className="input"><TextField onBlur={handleOnBlur}  type="text" name="name" label="Name" /></div>
                    <div className="input"><TextField onBlur={handleOnBlur} type="text" name="key" label="Key" /> <br/></div>
                   </div>
                   <div>
                   <div className="input"> <TextField onBlur={handleOnBlur}  type="text" name="description" label="Description" /></div>
                    <div className="input"> <TextField onBlur={handleOnBlur} type="text" name="photo" label="Photo URL" /></div>
                   </div>
                   </div>
                   <div className="add-btn"><Button type="submit" variant="outlined" color="primary"> Add Event </Button></div>
                    </form>
                    </div>
                </div>

                </div>}
            </div>
        </div>
    );
};

export default Admin;