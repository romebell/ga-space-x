import React from 'react';
// import '../Company.css'

const Company = (props) => {
    const { student, ceo, employees, name, valuation, vehicles } = props.company
    return (
        <div className='company'>
            <ul>
                <li>Student: {student}</li>
                <li>Ceo: {ceo}</li>
                <li>Emliloyees: {employees}</li>
                <li>Name: {name}</li>
                <li>Valuation: {valuation}</li>
                <li>Vehicles: {vehicles}</li>
            </ul>
            
        </div>
    );
}

export default Company;
