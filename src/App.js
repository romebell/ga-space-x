//imports
import {useState, useEffect} from 'react'
import axios from 'axios'
import Company from './components/company/Company'

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
      <h1>G spAce x</h1>
      <Company company={company}/>
    </div>
  );
}

export default App;
