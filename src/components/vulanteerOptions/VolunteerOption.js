import React, { useEffect, useState } from 'react';
// import fakeData from '../fakedata/FakeData';
import Options from '../options/Options';
import './VolunteerOption.css'


const VolunteerOption = () => {
    const [options, setOptions] = useState([]);
    // const volunteerOption = fakeData;
    

    useEffect(()=>{
        fetch('http://localhost:4000/options')
        .then(res => res.json())
        .then(data => setOptions(data))
    }, [])

//     const handlePost = ()=>{
//         fetch('http://localhost:4000/addOptions', {
//             method:"POST",
//             headers:{'Content-Type': 'application/json'},
//             body:JSON.stringify(volunteerOption)
//     })
// }

    
   
    
    return (
        <div className='volunteer'>
        {/* <button onClick={handlePost}>post</button> */}


        {
            options.map( opt => <Options options={opt} key={opt._id}></Options>)
        }
        
            
        </div>
    );
};

export default VolunteerOption;