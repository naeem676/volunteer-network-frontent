import React from 'react';
import './Options.css';

const Options = (props) => {
    const {name, photo} = props.options
    return (
        <div className="options-main">
        <div className="options-div">
            <div className="img-div">
            <img className="options-img" src={photo} alt="" srcset=""/>
            <div className="h4" ><h4>{name}</h4></div>
            </div>
            
        </div>
            
        </div>
    );
};

export default Options;