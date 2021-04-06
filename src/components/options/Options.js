import React from 'react';
import './Options.css';

const Options = (props) => {
    const {name, photo, key} = props.options;

   const handleAdd = (id)=>{
        fetch('http://localhost:4000/addOption/' + id)
        .then(res => res.json())
        .then(data => console.log(data))
        // console.log(id)
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