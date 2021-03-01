import { useState, useEffect } from 'react'
import axios from 'axios'
import UpcomingLaunches from './UpcomingLaunches'

const UpcomingLaunchUnitContainer = () => {
    const [upcomingLaunches, setUpcomingLaunches] = useState([])
    
    
    useEffect(() => {
        const fetchUpcomingLaunches = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
            const data = response.data;
            // console.log(data);
            // destructuring
            setUpcomingLaunches(data);
        }
        fetchUpcomingLaunches();
    }, [])

    const upcomingLaunchList = upcomingLaunches.map((upcomingLaunch, index) => {
        return <UpcomingLaunches upcomingLaunches={upcomingLaunch} key={index} />
        // <li key={pastLaunche}><Link to={`/pastLaunches/${pastLaunche}`}>{pastLaunche}</Link></li>
    });

    return (
        <div>
            {upcomingLaunchList}
        </div>
    )
}

export default UpcomingLaunchUnitContainer;