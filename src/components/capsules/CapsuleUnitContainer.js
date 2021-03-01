import { useState, useEffect } from 'react'
import axios from 'axios'
import Capsule from './Capsule'

//funcitonal 
const CapsuleUnitContainer = () => {
    const [capsules, setCapsules] = useState([])

    useEffect(() => {
        const fetchCapsules = async () => {
          const response = await axios.get('https://api.spacexdata.com/v4/capsules');
          const data = response.data; //array
         // console.log(`*******************************`, data);
          // destructure
          setCapsules(data);
        }
        fetchCapsules();
      }, [])
      
      const capsuleList = capsules.map((capsule, index) => {
          return <Capsule key={index} capsule={capsule}  />
          // return <Capsule capsule={capsule} key={index} />
      })
      //console.log(`***********************`, capsuleList)
      return (
        <>
            {capsuleList}
        </>
      )
}

  export default CapsuleUnitContainer;