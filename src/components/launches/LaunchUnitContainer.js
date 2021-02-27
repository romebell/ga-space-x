import { useState, useEffect } from 'react';
import axios from 'axios'
import Launch from './Launch'; // launch component is in the same folder

const LaunchUnitContainer = () => {
    const [launches, setLaunches] = useState([])
        
        useEffect(() => {
            const fetchLaunches = async () => {
              const response = await axios.get('https://api.spacexdata.com/v4/launches');
              const data = response.data; //array

              setLaunches(data)
            }
            fetchLaunches();
        }, [])
    
        console.log(launches)
    
        const launchList = launches.map((launch, index) => {
            return <Launch launch={launch} key={index} />
        });
    
        return (
            <div>
            {launchList}
            </div>
        )
    }
    
    export default LaunchUnitContainer;