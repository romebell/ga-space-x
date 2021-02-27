import { useState, useEffect } from 'react';
import axios from 'axios'
import Dragon from './Dragon'; // dragon component is in the same folder

const DragonUnitContainer = () => {
    const [dragons, setDragons] = useState([])
        
        useEffect(() => {
            const fetchDragons = async () => {
              const response = await axios.get('https://api.spacexdata.com/v4/dragons');
              const data = response.data; //array

              setDragons(data)
            }
            fetchDragons();
        }, [])
    
        console.log(dragons)
    
        const dragonList = dragons.map((dragon, index) => {
            return <Dragon dragon={dragon} key={index} />
        });
    
        return (
            <div>
            {dragonList}
            </div>
        )
    }
    
    export default DragonUnitContainer;