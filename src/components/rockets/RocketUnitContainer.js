import { useState, useEffect } from 'react'
import axios from 'axios'
import Rocket from './Rocket'
import {Link} from 'react-router-dom'

const RocketUnitContainer = () => {
    const [rockets, setRockets] = useState([])
    
    
    useEffect(() => {
        const fetchRockets = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/Rockets');
            const data = response.data;
            // console.log(data);
            // destructuring
            setRockets(data);
        }
        fetchRockets();
    }, [])

    const rocketList = rockets.map((rocket, index) => {
        return <Rocket rocket={rocket} key={index} />

    });

    return (
        <div>
            {rocketList}
        </div>
    )
}

export default RocketUnitContainer;