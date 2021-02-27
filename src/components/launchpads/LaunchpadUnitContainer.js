import { useState, useEffect } from 'react';
import axios from 'axios'
import Launchpad from './Launchpad'; 

const LaunchpadUnitContainer = () => {
    const [launchpads, setLaunchpads] = useState([])
        
        useEffect(() => {
            const fetchLaunchpads = async () => {
              const response = await axios.get('https://api.spacexdata.com/v4/launchpads');
              const data = response.data; //array

              setLaunchpads(data)
            }
            fetchLaunchpads();
        }, [])
    
        console.log(launchpads)
    
        const launchpadList = launchpads.map((launchpad, index) => {
            return <Launchpad launchpad={launchpad} key={index} />
        });
    
        return (
            <div>
            {launchpadList}
            </div>
        )
    }
    
    export default LaunchpadUnitContainer;