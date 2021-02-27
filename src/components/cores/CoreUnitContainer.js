import { useState, useEffect } from 'react';
import axios from 'axios'

import Core from './Core'; // core component is in the same folder

const CoreUnitContainer = () => {
    const [cores, setCores] = useState([])
        
        useEffect(() => {
            const fetchCores = async () => {
              const response = await axios.get('https://api.spacexdata.com/v4/cores');
              const data = response.data; //array

              setCores(data)
            }
            fetchCores();
        }, [])
    
        console.log(cores)
    
        const coreList = cores.map((core, index) => {
            return <Core core={core} key={index} />
        });
    
        return (
            <div>
            {coreList}
            </div>
        )
    }
    
    export default CoreUnitContainer;