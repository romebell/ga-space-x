import axios from 'axios'
import {useEffect, useState} from 'react'
import Launch from './Launch'

const LaunchUnitContainer = (props)=>{
    const [launches, setLaunches] = useState([])

    useEffect(()=>{
        const fetchLaunch = async()=>{
            const response = await axios.get('https://api.spacexdata.com/v4/launches/')
            const data = await response.data
            setLaunches(data)
        }
        fetchLaunch()
    }, [])
    
    const launchList = launches.map((launch, index)=>{
        return <Launch launch={launch} key={index}/>
    })

    return(
        <div>
            Launch Information
            {launchList}
        </div>
    )
}

export default LaunchUnitContainer