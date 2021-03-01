import { useState, useEffect } from 'react'
import axios from 'axios'
import PastLaunches from './PastLaunches'

const PastLaunchUnitContainer = () => {
    const [pastLaunches, setPastLaunches] = useState([])
    
    
    useEffect(() => {
        const fetchPastLaunches = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/launches/past');
            const data = response.data;
            // console.log(data);
            // destructuring
            setPastLaunches(data);
        }
        fetchPastLaunches();
    }, [])

    const pastLaunchList = pastLaunches.map((pastLaunch, index) => {
        return <PastLaunches pastLaunches={pastLaunch} key={index} />
        // <li key={pastLaunche}><Link to={`/pastLaunches/${pastLaunche}`}>{pastLaunche}</Link></li>
    });

    return (
        <div>
            {pastLaunchList}
        </div>
    )
}

export default PastLaunchUnitContainer;