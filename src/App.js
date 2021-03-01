/// imports
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Company from './components/company/Company';
import CapsuleUnitContainer from './components/capsules/CapsuleUnitContainer';
import CoreUnitContainer from './components/cores/CoreUnitContainer';
import CrewUnitContainer from './components/crew/CrewUnitContainer';
import DragonUnitContainer from './components/dragon/DragonUnitContainer'
import LandpadUnitContainer from './components/landpad/LandpadUnitContainer';
import PastLaunchUnitContainer from './components/launch/past/PastLaunchUnitContainer';
import UpcomingLaunchUnitContainer from './components/launch/upcoming/UpcomingLaunchUnitContainer'
import AllLaunchUnitContainer from './components/launch/all/AllLaunchUnitContainer';
import LaunchPadUnitContainer from './components/launchpad/LaunchPadUnitContainer';
import PayloadUnitContainer from './components/payload/PayloadUnitContainer';
import RoadsterUnitContainer from './components/roadster/RoadsterUnitContainer';
import RocketUnitContainer from './components/rockets/RocketUnitContainer';
import ShipUnitContainer from './components/ship/ShipUnitContainer';
import HistoryUnitContainer from './components/history/HistoryUnitContainer';











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
        student: 'Amir Harrison',
        ceo: ceo,
        employees: employees,
        name: name,
        valuation,
        vehicles
      });

    }
    fetchCompany();
  }, [])
  console.log(company)
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/capsules">Capsules</Link>
          <br/>
          <Link to="/cores">Cores</Link>
          <br/>
          <Link to="/crew">Crew</Link>
          <br/>
          <Link to="/dragons">Dragons</Link>
          <br/>
          <Link to="/landpads">Landpads</Link>
          <br/>
          <Link to="/pastlaunches">Past Launches</Link>
          <br/>
          <Link to="/upcominglaunches">Upcoming Launches</Link>
          <br/>
          <Link to="/alllaunches">All Launches</Link>
          <br/>
          <Link to="/launchpad">LaunchPad</Link>
          <br/>
          <Link to="/payload">Payload</Link>
          <br/>
          <Link to="/roadster">Roadster</Link>
          <br/>
          <Link to="/rocket">Rockets</Link>
          <br/>
          <Link to="/ship">Ships</Link>
          <br/>
          <Link to="/history">History</Link>
        </nav>
        <h1>GA Space X</h1>
        <Route exact path="/" render={() => <Company company={company}/>} />
        <Route path="/capsules" component={CapsuleUnitContainer} />
        <Route path="/cores" component={CoreUnitContainer} />
        <Route path="/crew" component={CrewUnitContainer} />
        <Route path="/dragons" component={DragonUnitContainer} />
        <Route path="/landpads" component={LandpadUnitContainer} />
        <Route path="/pastlaunches" component={PastLaunchUnitContainer} />
        <Route path="/upcominglaunches" component={UpcomingLaunchUnitContainer} />
        <Route path="/alllaunches" component={AllLaunchUnitContainer} />
        <Route path="/launchpad" component={LaunchPadUnitContainer} />
        <Route path="/payload" component={PayloadUnitContainer} />
        <Route path="/roadster" component={RoadsterUnitContainer} />
        <Route path="/rocket" component={RocketUnitContainer} />
        <Route path="/ship" component={ShipUnitContainer} />
        <Route path="/history" component={HistoryUnitContainer} />
      </div>
    </Router>
  );
}

export default App;