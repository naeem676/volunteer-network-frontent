import React from 'react';
import './Event.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Event = (props) => {
    const classes = useStyles();
    const {photo, organization, date} = props.task
    const handleDelete = (id) => {
         console.log(id)
    }
    return (
        <div className="event">
          <div className="event-main">
              <div className="img-event"><img className='event-img' src={photo} alt="" srcset=""/></div>
              <div className="event-text">
                  <h4>{organization}</h4>
                  <p>{date}</p>
              </div>
              <div className="event-btn">
              <div className={classes.root}><Button onClick={()=>handleDelete(props.task._id)} variant="outlined">Cancel</Button></div>
              </div>
          </div>

            
        </div>
    );
};

export default Event;