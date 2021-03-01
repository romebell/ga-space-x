import {useEffect, useState} from 'react'
import axios from 'axios'
import Ship from './Ship'

const ShipUnitContainer = (props) =>{
    const [ships, setShips] = useState([])

    useEffect(()=>{
        const fetchShip = async()=>{
            const response = await axios.get('https://api.spacexdata.com/v4/ships')
            const data = response.data
            setShips(data)
        }
        fetchShip()
    }, [])

    const shipsList = ships.map((ship, index)=>{
        return <Ship ship={ship} key={index}/>
    })

    return(
        <div>
            SpaceX Ship Data
            {shipsList}
        </div>
    )
}

export default ShipUnitContainer