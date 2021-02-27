import { useState, useEffect } from 'react';
import axios from 'axios'
import Crew from './Crew'; // crew component is in the same folder

const CrewUnitContainer = () => {
    const [crews, setCrews] = useState([])
        
        useEffect(() => {
            const fetchCrews = async () => {
              const response = await axios.get('https://api.spacexdata.com/v4/crew');
              const data = response.data; //array

              setCrews(data)
            }
            fetchCrews();
        }, [])
    
        console.log(crews)
    
        const crewList = crews.map((crew, index) => {
            return <Crew crew={crew} key={index} />
        });
    
        return (
            <div>
            {crewList}
            </div>
        )
    }
    
    export default CrewUnitContainer;