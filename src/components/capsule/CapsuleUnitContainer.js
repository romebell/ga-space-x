import { useState, useEffect } from 'react';
import axios from 'axios'

import Capsule from './Capsule'; // capsule component is in the same folder

const CapsuleUnitContainer = () => {
    const [capsules, setCapsules] = useState([])
        
        useEffect(() => {
            const fetchCapsules = async () => {
              const response = await axios.get('https://api.spacexdata.com/v4/capsules');
              const data = response.data; //array
              // destructuring
            //   const { water_landings, last_update, serial, type} = data[0];
            //   console.log(water_landings)
              setCapsules(data)
            //   setCapsules({
            //     water_landings: water_landings,
            //     last_update: last_update,
            //     serial: serial,
            //     type: type
            //   });
            }
            fetchCapsules();
        }, [])
    
        console.log(capsules)
    
        const capsuleList = capsules.map((capsule, index) => {
            return <Capsule capsule={capsule} key={index} />
        });
    
        return (
            <div>
            {capsuleList}
            </div>
        )
    }
    
    export default CapsuleUnitContainer;