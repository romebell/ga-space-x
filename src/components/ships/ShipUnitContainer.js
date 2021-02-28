import { useState, useEffect } from 'react';
import axios from 'axios'
import Ship from './Ship'; // ship component is in the same folder

const ShipUnitContainer = () => {
    const [ships, setShips] = useState([])
        
        useEffect(() => {
            const fetchShips = async () => {
              const response = await axios.get('https://api.spacexdata.com/v4/ships');
              const data = response.data; //array

              setShips(data)
            }
            fetchShips();
        }, [])
    
        console.log(ships)
    
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