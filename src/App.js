// imports
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Company from './components/company/Company';
import CapsuleUnitContainer from './components/capsules/CapsuleUnitContainer';

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

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function App() {
  // state
  const [company, setCompany] = useState({});

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await axios.get(REACT_APP_SERVER_URL); // our API endpoint
      const data = response.data;
      // name, author, greeting
      // destructuring
      console.log(data);
      const { name, author, greeting } = data;
      setCompany({
        name,
        author,
        greeting
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
        </nav>
        <h1>GA Space X</h1>
        <Route exact path="/" render={() => <Company company={company}/>} />
        <Route path="/capsules" component={CapsuleUnitContainer} />
      </div>
    </Router>
  );
}

export default App;
