//imports
import {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

//components
import Company from './components/company/Company'
import CapsuleUnitContainer from './components/capsules/CapsulesUnitContainer'
import CoreUnitContainer from './components/core/CoreUnitContainer'
import CrewUnitContainer from './components/crew/CrewUnitContainer'
import DragonUnitContainer from './components/dragons/DragonUnitContainer'
import LandpadUnitContainer from './components/landpads/LandpadUnitContainer'
import LaunchUnitContainer from './components/launches/LaunchUnitContainer'
import Launch from './components/launches/Launch'
import LaunchPadUnitContainer from './components/launchpads/LaunchPadUnitContainer'
import PayloadUnitContainer from './components/payloads/PayloadUnitContainer'
import Roadster from './components/roadster/Roadster'
import RocketUnitContainer from './components/rockets/RocketUnitContainer'
import ShipUnitContainer from './components/ships/ShipUnitContainer'
import HistoryUnitContainer from './components/history/HistoryUnitContainer'


function App() { //make this an async functional component
  // setting state of "company" object 
  // allowing it to be changed with setCompany() 
  const [company, setCompany] = useState({})

  useEffect(() => {
    const fetchCompany = async() => {
    // as a .then method tomake api requests
    //axios.get('https://api.spacexdata.com/v4/company')
    //.then(response=>{
    //const data = response.data
    //console.log(data)})

    const response = await axios.get('https://api.spacexdata.com/v4/company') //fetching api response
    const data = response.data //intermeditate variable to store palatable response
    const {ceo, employees, name, valuation, founder} = data //declaring which keys to log from fetched response
    setCompany({
      student: 'Leo B',
      ceo,
      employees,
      name, 
      valuation,
      founder
    }) //returning data and changing "company" object's state
  }
  fetchCompany() //calling function to run
}, [])

  //running the previously declared function
  //naming the return as companyData
  //making it asynchronous to allow fetching before 
  //console logging and accessing data
  // const companyData = await fetchCompany() //calling function and naming the return as companyData
  // console.log(companyData)
  return (
    <div>
      <Router>
        <nav>
          <Link to='/'>Home</Link><br/>
          <Link to='/capsules'>Capsules</Link><br/> {/*creating hyperlnk to capsules component */}
          <Link to='/cores'>Cores</Link><br/>
          <Link to='/crew'>Crew</Link><br/>
          <Link to='/dragons'>Dragons</Link><br/>
          <Link to ='/landpads'>Landing Pads</Link><br/>
          <Link to='/launches'>Launches</Link><br/>
          <Link to='/launchpads'>Launchpads</Link><br/>
          <Link to='/payloads'>Payloads</Link><br/>
          <Link to='/roadster'>Roadster</Link><br/>
          <Link to='/rockets'>Rockets</Link><br/>
          <Link to='/ships'>Ships</Link><br/>
          <Link to='/history'>History</Link>
        </nav>

        <h1>G spAce x</h1>
          <Route exact path='/' render={()=> <Company company={company}/>} /> {/* this creates home page with Company component passed into the render with access to company prop*/}
          <Route path='/capsules' component={CapsuleUnitContainer}/> {/* this creates the capsules route with CapsuleUnitContainer component */}
          <Route path='/cores' component={CoreUnitContainer}/>
          <Route path='/crew' component={CrewUnitContainer}/>
          <Route path='/dragons' component={DragonUnitContainer}/>
          <Route path='/landpads' component={LandpadUnitContainer}/>
          <Route exact path='/launches' component={LaunchUnitContainer}/>
          <Route path='/launches/:id' comonent={Launch}/>
          <Route path='/launchpads' component={LaunchPadUnitContainer}/>
          <Route path='/payloads' component={PayloadUnitContainer}/>
          <Route path='/roadster' component={Roadster}/>
          <Route path='/rockets' component={RocketUnitContainer}/>
          <Route path='/ships' component={ShipUnitContainer}/>
          <Route path='/history' component={HistoryUnitContainer}/>
      </Router>
    </div>
  );
}

export default App;
