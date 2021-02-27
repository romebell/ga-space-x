import {useEffect, useState} from 'react'
import axios from 'axios'

import Capsule from './Capsule'

const CapsuleUnitContainer = () =>{
    const [capsules, setCapsules] = useState([])//an array because out data returns as an array

    useEffect(() => {
        const fetchCapsule = async() => {
        // as a .then method tomake api requests
        //axios.get('https://api.spacexdata.com/v4/capsules')
        //.then(response=>{
        //const data = response.data
        //console.log(data)})
    
        const response = await axios.get('https://api.spacexdata.com/v4/capsules') //fetching api response
        const data = response.data //intermeditate variable to store palatable response, this data returns as an array
        setCapsules(data) //returning data and changing "company" object's state
      }
      fetchCapsule() //calling function to run
    }, [])

    const capsuleList = capsules.map((capsule, index)=>{
        return <Capsule capsule={capsule} key={index}/>
    })
    
    return(
        <div>
            {capsuleList}
        </div>
    )
}

export default CapsuleUnitContainer