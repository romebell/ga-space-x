import { useState, useEffect } from 'react'
import axios from 'axios'
import LaunchPad from './LaunchPad'
import {Link} from 'react-router-dom'

const LaunchPadUnitContainer = () => {
    const [launchPads, setLaunchPads] = useState([])
    
    
    useEffect(() => {
        const fetchLaunchPads = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/launchpads');
            const data = response.data;
            // console.log(data);
            // destructuring
            setLaunchPads(data);
        }
        fetchLaunchPads();
    }, [])

    const launchPadList = launchPads.map((launchPad, index) => {
        return <LaunchPad launchPad={launchPad} key={index} />

    });

    return (
        <div>
            {launchPadList}
        </div>
    )
}

export default LaunchPadUnitContainer;