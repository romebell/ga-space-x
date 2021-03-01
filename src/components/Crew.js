import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Crew = () => {
    const [crews, setCrews] = useState([])
    
    useEffect(() => {
        const fetchCrew = async () => {
        const response = await axios.get('https://api.spacexdata.com/v4/crew')
        const data = response.data
        
        //console.log(data)
        setCrews(data)
    }
    fetchCrew()
}, []);

    const crewList = crews.map((crew, index) => {
        return <li key={index}>{crew.name} <img src='{crew.image}'/></li>
    })
    
   console.log(crewList[0])
    return (
        <div>
            <h2>{crewList}</h2>
            
        </div>
    );
}

export default Crew;
