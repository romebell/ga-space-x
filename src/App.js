// imports
import axios from 'axios';
import { useState, useEffect } from 'react';
import Company from './components/Company'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CapsuleUnitContainer from './components/capsules/CapsuleUnitContainer'
import Core from './components/Core'
// import Crew from './components/Crew'
// import Dragon from './components/Dragon'
// import Fairing from './components/Fairing'
// import History from './components/History'
// import Landpad from './components/Landpad'
// import Payload from './components/Payload'
// import Roadster from './components/Roadster'
// import Rocket from './components/Rocket'
// import Ship from './components/Ship'
// import Starlink from './components/Starlink'

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
        student: 'Mocha Brown',
        ceo: ceo,
        employees: employees,
        name: name,
        //same as valuation: valuation 
        valuation,
        vehicles
      });
    }
    fetchCompany();
  }, [])

  //console.log(company)

  return (
    <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/capsules'>Capsules</Link>
          <Link to='/core'>Core</Link>
        </nav>
        <h1>GA Space X</h1>
        <Route exact path='/' render={() => <Company company={company} />} />
        <Route path='/capsules' component={CapsuleUnitContainer} />
        {/* <Route path='/capsules/:id' component={<CapsuleUnitContainer />}/> */}
        <Route path='/core' component={Core} />
        {/* <Route path='/crew' component={Crew} />
        <Route path='/dragon' component={} />
        <Route path='/fairing' component={} />
        <Route path='/history' component={} />
        <Route path='/landpad' component={} />
        <Route path='/payload' component={} />
        <Route path='/roadster' component={} />
        <Route path='/rocket' component={} />
        <Route path='/ship' component={} />
        <Route path='/starlink' component={} /> */}

    </Router>
  );
}
export default App;