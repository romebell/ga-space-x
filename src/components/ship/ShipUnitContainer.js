import { useState, useEffect } from 'react'
import axios from 'axios'
import Ship from './Ship'
import {Link} from 'react-router-dom'

const ShipUnitContainer = () => {
    const [ships, setShips] = useState([])
    
    
    useEffect(() => {
        const fetchShips = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/Ships');
            const data = response.data;
            // console.log(data);
            // destructuring
            setShips(data);
        }
        fetchShips();
    }, [])

    const shipList = ships.map((ship, index) => {
        return <Ship ship={ship} key={index} />

    });

    return (
        <div>
            {shipList}
        </div>
    )
}

export default ShipUnitContainer;