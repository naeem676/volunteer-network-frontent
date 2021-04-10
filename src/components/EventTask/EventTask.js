import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Event from '../event/Event';
import Selected from '../Selected/Selected';
import './EventTask.css';

const EventTask = () => {
   
    const [loggedUser, setLoggedUser]= useContext(UserContext);
    const [event, setEvent] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/eventTask?email=' + loggedUser.email, {
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
                authorization:`Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setEvent(data))
    },[event])
    return (
        <div className="event-task">
        <Selected></Selected>

        {
               event.map( task => <Event task={task} key={task._id} ></Event>)
        }
        

            
        </div>
    );
};

export default EventTask;