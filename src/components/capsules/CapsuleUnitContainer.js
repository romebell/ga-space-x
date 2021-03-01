import { useState, useEffect } from 'react'
import axios from 'axios'
import Capsule from './Capsule'

const CapsuleUnitContainer = () => {
    const [capsules, setCapsules] = useState([])
    
    
    useEffect(() => {
        const fetchCapsules = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/capsules');
            const data = response.data;
            // console.log(data);
            // destructuring
            setCapsules(data);
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
