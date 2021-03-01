import {useEffect, useState} from 'react'
import axios from 'axios'
import LaunchPad from './LaunchPad'

const LaunchPadUnitContainer = (props) =>{
    const [launchpads, setLaunchPads] = useState([])

    useEffect(() =>{
        const fetchLaunchPad = async()=>{
            const reponse = await axios.get('https://api.spacexdata.com/v4/launchpads')
            const data = await reponse.data
            setLaunchPads(data)
        }
        fetchLaunchPad()
    }, [])

    const launchPadList = launchpads.map((launchpad, index)=>{
        return <LaunchPad launchPad={launchpad} key={index}/>
    })

    return(
        <div>
            LaunchPad Information
            {launchPadList}
        </div>
    )
}

export default LaunchPadUnitContainer