import {useEffect, useState} from 'react'
import axios from 'axios'
import Rocket from './Rocket'

const RocketUnitContainer = () =>{
    const [rockets, setRocket] = useState([])

    useEffect(()=>{
        const fetchRockets = async()=>{
            const response = await axios.get('https://api.spacexdata.com/v4/rockets')
            const data = response.data
            setRocket(data)
        }
        fetchRockets()
    }, [])

    const rocketList = rockets.map((rocket, index)=>{
        return <Rocket rocket={rocket} key={index}/>
    })

    return(
        <div>
            Rocket Data
            {rocketList}
        </div>
    )
}

export default RocketUnitContainer