// imports
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Company from './components/company/Company';
import CapsuleUnitContainer from './components/capsules/CapsuleUnitContainer';
import CoreUnitContainer from './components/cores/CoreUnitContainer';
import CrewUnitContainer from './components/crews/CrewUnitContainer';
import DragonUnitContainer from './components/dragons/DragonUnitContainer';
import LandpadUnitContainer from './components/landpads/LandpadUnitContainer';
import LaunchUnitContainer from './components/launches/LaunchUnitContainer';
import LaunchpadUnitContainer from './components/launchpads/LaunchpadUnitContainer';
import PayloadUnitContainer from './components/payloads/PayloadUnitContainer';


/*{
ceo: "Elon Musk"
coo: "Gwynne Shotwell"
cto: "Elon Musk"
cto_propulsion: "Tom Mueller"
employees: 8000
founded: 2002
founder: "Elon Musk"
headquarters: {address: "Rocket Road", city: "Hawthorne", state: "California"}
id: "5eb75edc42fea42237d7f3ed"
launch_sites: 3
links: {website: "https://www.spacex.com/", flickr: "https://www.flickr.com/photos/spacex/", twitter: "https://twitter.com/SpaceX", elon_twitter: "https://twitter.com/elonmusk"}
name: "SpaceX"
summary: "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
test_sites: 1
valuation: 52000000000
vehicles: 3
}
*/
function App() {
  // state
  const [company, setCompany] = useState({});
  useEffect(() => {
    const fetchCompany = async () => {
      const response = await axios.get('https://api.spacexdata.com/v4/company');
      const data = response.data;
      // destructuring
      const { ceo, employees, name, valuation, vehicles } = data;
      setCompany({
        student: 'Tom Erickson: @github.com/tommytoyou ',
        superpower: 'Tenacious Optimism',
        company_in_spotlight: 'SpaceX',
        ceo: ceo,
        employees: employees,
        name: name,
        valuation,
        vehicles
      });
    }
    fetchCompany();
  }, [])
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'> Home </Link>
          <br />
          <Link to='/capsule'> Capsule </Link>
          <br />
          <Link to='/core'> Core </Link>
          <br />
          <Link to='/crew'> Crew </Link>
          <br />
          <Link to='/dragon'> Dragon </Link>
          <br />
          <Link to='/landpad'> Landing Pads </Link>
          <br />
          <Link to='/launch'> Launches </Link>
          <br />
          <Link to='/launchpad'> Launch Pads </Link>
          <br />
          <Link to='/payload'> Payloads </Link>
        </nav>
          <h1>GA Space X</h1>
          <Company company={company}/>
          <Route exact path="/" render={(company) => <company {...company} />} />
          <Route path='/capsule' component={CapsuleUnitContainer} />
          <Route path='/core' component={CoreUnitContainer}/>
          <Route path='/crew' component={CrewUnitContainer}/>
          <Route path='/dragon' component={DragonUnitContainer}/>
          <Route path='/landpad' component={LandpadUnitContainer}/>
          <Route path='/launch' component={LaunchUnitContainer}/>
          <Route path='/launchpad' component={LaunchpadUnitContainer}/>
          <Route path='/payload' component={PayloadUnitContainer}/>
      </div>
    </Router>
  );
}
//=====================
// fetch way
// const response = await fetch('https://api.spacexdata.com/v4/company');
// const data = await response.json();
// console.log(data);
//======================
// .then wat
// axios.get('https://api.spacexdata.com/v4/company')
// .then(response => {
//     const data = response.data;
//     console.log(data);
// });
//=======================


export default App;