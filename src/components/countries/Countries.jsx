import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = () => {
        console.log('handle visited country clicked');
    };
    
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);

    return (
        <div>
            <h1>In the countries: {countries?.length}</h1>
            <p>Total Country Visited: </p>
            {/* map countries */}
            <div className='countries'>
                {
                    countries?.map(country => <Country key={country?.name?.common} country={country} handleVisitedCountries={handleVisitedCountries} />)
                }
            </div>
        </div>
    );
};

export default Countries;