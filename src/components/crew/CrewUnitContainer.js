import { useState, useEffect } from 'react'
import axios from 'axios'
import Crew from './Crew'

const CrewUnitContainer = () => {
    const [crew, setCrew] = useState([])
    
    
    useEffect(() => {
        const fetchCrew = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/crew');
            const data = response.data;
            // console.log(data);
            // destructuring
            setCrew(data);
        }
        fetchCrew();
    }, [])

    const crewList = crew.map((crew, index) => {
        return <Crew crew={crew} key={index} />
    });

    return (
        <div>
            {crewList}
        </div>
    )
}

export default CrewUnitContainer;