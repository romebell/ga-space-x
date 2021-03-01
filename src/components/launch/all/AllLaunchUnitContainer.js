import { useState, useEffect } from 'react'
import axios from 'axios'
import AllLaunches from './AllLaunches'

const AllLaunchUnitContainer = () => {
    const [allLaunches, setAllLaunches] = useState([])
    
    
    useEffect(() => {
        const fetchAllLaunches = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/launches/');
            const data = response.data;
            // console.log(data);
            // destructuring
            setAllLaunches(data);
        }
        fetchAllLaunches();
    }, [])

    const allLaunchList = allLaunches.map((allLaunch, index) => {
        return <AllLaunches allLaunches={allLaunch} key={index} />
        // <li key={pastLaunche}><Link to={`/pastLaunches/${pastLaunche}`}>{pastLaunche}</Link></li>
    });

    return (
        <div>
            {allLaunchList}
        </div>
    )
}

export default AllLaunchUnitContainer;