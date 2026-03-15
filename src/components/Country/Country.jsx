import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries}) => {
    // console.log(country.flags?.flags?.png);
    // console.log(handleVisitedCountries);
    const [visited, setVisited] = useState(false);
    
    
    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries();
    };


    return (
        <div className='country'>
            <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt} />
            <div className='space-y-5'>
                <h3>Name: {country.name?.common}</h3>
                <p>Population: {country.population?.population}</p>
                <p>{country.area?.area} {country.area?.area > 300000 ? 'Big Country' : 'Small Country'}</p>
                <button className={visited ? 'visited' : 'not-visited'} onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            </div>
        </div>
    );
};

export default Country;