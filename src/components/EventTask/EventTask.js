import React, { useEffect, useState } from 'react';
import Event from '../event/Event';
import Selected from '../Selected/Selected';
import './EventTask.css';

const EventTask = () => {
    const [event, setEvent] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/eventTask')
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