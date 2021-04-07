import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Dialog } from '@material-ui/core';
import './Register.css';
import { SelectContext, UserContext } from '../../App';

const Register = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [selected, setSelected] = useContext(SelectContext);
   const [user, setUser] = useState({name:loggedUser.displayName, email:loggedUser.email, date:'', description:'', organization:selected.name});
    
    const handleOnBlur = e =>{
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);

      
    }
    
    const handleSubmit = e => {
        const newUser = {...user};
        const event = {...newUser, photo:selected.photo}
        fetch('http://localhost:4000/addEvent', {
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(event)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('data loaded')
            }
        })
        
        
      e.preventDefault()
    }
   
    return (
        <div>
         
        <div className='dialog'>
        <DialogTitle id="form-dialog-title">Register As a Volunteer</DialogTitle>
        
        
        <form onSubmit={handleSubmit}>
          <TextField autoFocus onBlur={handleOnBlur} name="name" value={loggedUser.displayName}  margin="dense"  label="Full Name" type="text" fullWidth />
          <TextField autoFocus onBlur={handleOnBlur} name="email" value={loggedUser.email}  margin="dense" label="Email Address" type="email" fullWidth />
          <TextField autoFocus onBlur={handleOnBlur} name="date"  margin="dense"   type="date" fullWidth />
          <TextField autoFocus onBlur={handleOnBlur} name="description"  margin="dense"  label="Description" type="text" fullWidth />
          <TextField autoFocus onBlur={handleOnBlur} name="organization" value={selected.name}  margin="dense"  label="Organize Books at library" type="text" fullWidth />
          <DialogActions>
          <Button type="submit" color="primary">
            Register
          </Button>
        </DialogActions>
          </form>
       
        
       
        </div>
     
            
        </div>
    );
};

export default Register;