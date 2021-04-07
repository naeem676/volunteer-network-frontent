import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SelectContext } from '../../App';
import './Options.css';

const Options = (props) => {
    const [selected, setSelected] = useContext(SelectContext);
    const {name, photo} = props.options;
    const history = useHistory();

   const handleAdd = (id)=>{
        fetch('http://localhost:4000/addOption/' + id)
        .then(res => res.json())
        .then(data => {
            setSelected(data)
            history.push('/register')
        })
        
       
   }

    return (
        <div className="options-main">
        <div onClick={()=>handleAdd(props.options._id)} className="options-div">
            <div className="img-div">
            <img className="options-img" src={photo} alt="" srcset=""/>
            <div className="h4" ><h4>{name}</h4></div>
            </div>
            
        </div>
            
        </div>
    );
};

export default Options;