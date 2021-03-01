import axios from 'axios'
import { useState, useEffect} from 'react'
import CrewMember from './CrewMember'

const CrewUnitContainer = (props) =>{

    const [crewMembers, setCrewMembers] = useState([])


    useEffect(()=>{
        const fetchCrew = async() =>{
            const response = await axios.get('https://api.spacexdata.com/v4/crew')
            const data = response.data
            setCrewMembers(data)
        }
        fetchCrew()
    }, [])

    const crewList = crewMembers.map((crewMember, index)=>{
        return <CrewMember crewMember={crewMember} key={index}/>
    })

    return(
        <div>
            Crew Data
            {crewList}
        </div>
    )
}

export default CrewUnitContainer