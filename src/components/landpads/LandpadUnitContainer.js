import { useState, useEffect } from 'react';
import axios from 'axios'
import Landpad from './Landpad'; // landpad component is in the same folder

const LandpadUnitContainer = () => {
    const [landpads, setLandpads] = useState([])
        
        useEffect(() => {
            const fetchLandpads = async () => {
              const response = await axios.get('https://api.spacexdata.com/v4/landpads');
              const data = response.data; //array

              setLandpads(data)
            }
            fetchLandpads();
        }, [])
    
        console.log(landpads)
    
        const landpadList = landpads.map((landpad, index) => {
            return <Landpad landpad={landpad} key={index} />
        });
    
        return (
            <div>
            {landpadList}
            </div>
        )
    }
    
    export default LandpadUnitContainer;