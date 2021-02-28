import { useState, useEffect } from 'react';
import axios from 'axios'
import Roadster from './Roadster'; // roadster component is in the same folder

const RoadsterUnitContainer = () => {
    const [roadsters, setRoadsters] = useState([])
        
        useEffect(() => {
            const fetchRoadsters = async () => {
              const response = await axios.get('https://api.spacexdata.com/v4/roadster');
              const data = response.data; //array

              setRoadsters(data)
            }
            fetchRoadsters();
        }, [])
    
        console.log(roadsters)
    
        const roadsterList = roadsters.map((roadster, index) => {
            return <Roadster roadster={Roadster} key={index} />
        });
    
        return (
            <div>
            {roadsterList}
            </div>
        )
    }
    
    export default RoadsterUnitContainer;