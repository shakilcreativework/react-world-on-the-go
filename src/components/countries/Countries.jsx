import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
    
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);

    return (
        <div>
            <h1>In the countries: {countries?.length}</h1>
            {/* map countries */}
            <div className='countries'>
                {
                    countries?.map(country => <Country key={country?.name?.common} country={country} />)
                }
            </div>
        </div>
    );
};

export default Countries;